import { Component } from '@angular/core';

@Component({
  selector: 'app-surendhar',
  templateUrl: './surendhar.component.html',
  styleUrls: ['./surendhar.component.scss']
})
export class SurendharComponent {
  isUserLoggedIn: boolean = false;

  login() {
    // Simulate a login action
    this.isUserLoggedIn = true;
  }

  logout() {
    // Simulate a logout action
    this.isUserLoggedIn = false;
  }
  
}  

                                                                                                    