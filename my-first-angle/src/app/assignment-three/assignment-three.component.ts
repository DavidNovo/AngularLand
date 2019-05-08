import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styles: [`
    .large {
      color: white
  }
  `]
})
export class AssignmentThreeComponent implements OnInit {
  showPara = true;
  counter = 0;
  theClicks = [];
  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(): void {
    this.showPara = !this.showPara;
    // increment the counter and add to array
    this.counter = this.counter + 1;
    this.theClicks.push('The button has been pressed: ' + this.counter);
  }


  getColor() {
    if (this.counter > 4) {
      return 'blue';
    } else if (this.counter <= 4) {
      return 'transparent';
    }
  }
}
