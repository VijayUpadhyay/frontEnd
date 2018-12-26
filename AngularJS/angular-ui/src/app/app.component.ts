import { Component } from '@angular/core';
import { User } from './obj-ip-to-cmpnt/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  title = 'Vijay!!';
  user: User;
  // set user object
  constructor() {
    this.user = new User();
    this.user.name = 'Radha';
    this.user.designation = 'CA';
    this.user.phone = [
      '1222',
      '457348'
    ];
  }
}
