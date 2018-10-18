import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // Properties
  user: User = {
    // Default User Data
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
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

    this.loaded = true;

  }

  // METHODS
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }

}
