import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // selector: '#app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewserver = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  userName = '';
  allowToReset = false;
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  showPassword = false;
  clicks = [];
  clickCount = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewserver = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'New Server was created: ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateCreatedServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  checkUserName() {
    if (this.userName === '') {
      return false;
    } else {
      return true;
    }
  }
  onHandleReset() {
    this.userName = '';
  }
  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    // this.clicks.push(this.clickCount++);
    this.clicks.push(new Date());
  }
}
