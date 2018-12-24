import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dateMsg: string;
//  date: Date = new Date();
//  todayDate = this.date.toDateString();
// todayTime = this.date.toLocaleTimeString();
  constructor() {
setInterval(() => {
let currentDate = new Date();
this.dateMsg = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
}, 1000);

   }

  ngOnInit() {
  }

}
