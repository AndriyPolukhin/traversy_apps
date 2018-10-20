import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    // USER DATA
    this.users = [
      {
        firstName: 'Andriy',
        lastName: 'Polukhin',
        email: 'andriy@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Anastasia',
        lastName: 'Tsukrova',
        email: 'anastasia@gmail.com',
        isActive: true,
        registered: new Date('03/11/2017 05:15:00'),
        hide: true
      },
      {
        firstName: 'Valentina',
        lastName: 'Yavorskaya',
        email: 'valya@gmail.com',
        isActive: false,
        registered: new Date('20/08/2008 18:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({ name: 'Anastasia' });
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log('Fetching users from service');
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
