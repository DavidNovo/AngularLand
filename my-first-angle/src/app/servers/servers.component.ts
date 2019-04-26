import { Component, OnInit } from '@angular/core';
/* This contains the business logic
*  can use String Interpolation or Property Binding to send to html */
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  /* This is Property Binding */
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
