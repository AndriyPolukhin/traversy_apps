import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  logs: {
    id: string,
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit() {
    this.logs = [
      { id: '1', text: 'Generated components' }
    ]
  }

}
