import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
/*
String Interpolation returning a string or something that cas be cast as
a string.
 */
export class ServerComponent {
  serverId: number = 10;
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
