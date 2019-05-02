import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  username = '';
  isNameAvailable;

  constructor() { }

  ngOnInit() {
  }

  clearUsername() {
    this.username = '';
  }

  // some used this approach
  onUserNameInput(event: Event) {
    this.isNameAvailable  = (<HTMLInputElement>event.target).value ? true : false;
  }
}
