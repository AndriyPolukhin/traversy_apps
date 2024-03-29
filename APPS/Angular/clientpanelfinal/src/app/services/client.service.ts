import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;


  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
  }

  /* THE COURSE SOLUTION
  getClients(): Observable<Client[]> {
    // 1. Get the clients with the id
    this.clients = this.clientsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.clients;
  }
  */

  /* THE CURERNT SOLUTION*/
  getClients(): Observable<Client[]> {
    // Get the clients with the id
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
    return this.clients;
  }

  newClient(client: Client) {
    this.clientsCollection.add(client);
  }
  /*
    getClient(id: string): Observable<Client> {
      this.clientDoc = this.afs.doc<Client>(`client/${id}`);
      this.client = this.clientDoc.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          if (a.payload.exists === false) {
            return null;
          } else {
            const data = a.payload.doc.data() as Client;
            data.id = a.payload.doc.id;
  
            return data;
  
          }
        })));
      return this.client;
    }
    */
  /*
   getClient(id: string): Observable<Client> {
     this.clientDoc = this.afs.doc<Client>(`client/${id}`);
     this.client = this.clientDoc.snapshotChanges().map(action => {
       if (action.payload.exists === false) {
         return null;
       } else {
         const data = action.payload.data() as Client;
         data.id = action.payload.id;
         return data;
       }
     });
     return this.client;
   }
  */

  getClient(id: string): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`client/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map(a => {
        if (a.payload.exists === false) {
          return null;
        } else {
          const data = a.payload.doc.data() as Client;
          data.id = a.payload.doc.id;

          return data;

        }
      }));
    return this.client;
  }

}
