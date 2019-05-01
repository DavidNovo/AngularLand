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
  serverCreationStatus = 'No server was created.';  // This will be used for Event Binding.
  serverName = '';  // used to caputre info from html

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created.';
  }

  onUpdateServerName(event: any) {
    /* console.log(event);*/
    this.serverName = (<HTMLInputElement>event.target).value;

  }


}
