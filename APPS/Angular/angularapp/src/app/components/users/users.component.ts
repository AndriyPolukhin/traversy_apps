import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Property
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;


  constructor() { }

  ngOnInit() {


    this.users = [
      {
        firstName: 'Andriy',
        lastName: 'Polukhin',
        age: 33,
        address: {
          street: 'Rosengaten',
          city: 'Hamburg',
          state: 'DE'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Anastasia',
        lastName: 'Tsukrova',
        age: 29,
        address: {
          street: 'Rosengaten',
          city: 'Hamburg',
          state: 'DE'
        },
        isActive: false,
        registered: new Date('03/11/2017 05:15:00')
      },
      {
        firstName: 'Valentina',
        lastName: 'Yavorskaya',
        age: 35,
        address: {
          street: 'Avtozavodskaya',
          city: 'Kiev',
          state: 'UA'
        },
        isActive: true,
        registered: new Date('20/08/2008 18:30:00')
      }
    ];

    this.loaded = true;

  }

  addUser(user: User) {
    this.users.push(user);
  }
}
