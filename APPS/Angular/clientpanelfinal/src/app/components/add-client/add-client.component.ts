import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  // Properties
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }
  disableBalanceOnAdd: boolean = true;
  @ViewChild('clientForm') from: any;


  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: Client, valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      // @SHOW ERROR
      this.flashMessage.show("Please fill out the form correctly", {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // @ADD NEW CLIENT
      this.clientService.newClient(value);
      // @SHOW MESSAGE
      this.flashMessage.show("New Client added", {
        cssClass: 'alert-success', timeout: 4000
      });
      // @REDIRECT TO DASH
      this.router.navigate(['/']);

    }
  }

}
