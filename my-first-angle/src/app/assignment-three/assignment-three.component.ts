import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  showPara: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(): void {
    if (this.showPara) {
      this.showPara = false;
    } else {
      this.showPara = true;
    }
  }


}
