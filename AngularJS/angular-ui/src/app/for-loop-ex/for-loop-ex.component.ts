import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop-ex',
  templateUrl: './for-loop-ex.component.html',
  styleUrls: ['./for-loop-ex.component.css']
})
export class ForLoopExComponent implements OnInit {
  user: any;
  constructor() {
    this.user = {
      name: 'User_Name',
      title: 'SE',
      phone: [
        '1234',
        '5678',
        '1122'
      ]
    };
  }

  ngOnInit() {
  }

}
