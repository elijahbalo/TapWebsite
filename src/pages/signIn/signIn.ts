import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
import { RefresherService } from './../../services/refresher.service';
import { Router } from '@angular/router';

@Component({
   selector: 'page-signIn',
  templateUrl: 'signIn.html',
  styleUrls: ['./signIn.css']
})
export class SignInPage {
username;
  password;
  constructor(
    private userService: UserService,
    private refresherService: RefresherService,
    private router: Router
  ) { }

 
  signIn() {
    this.userService.signIn(this.username, this.password).subscribe(response => {
      localStorage.setItem('user-token', response.access_token);
      localStorage.setItem('refresh-token', response.refresh_token);
      console.log("login successful")
      this.userService.getCurrentUserInfo().subscribe();
      this.refresherService.refresh();
      this.router.navigateByUrl('/accountPage');
    }, err => {
      let message = 'Cannot Login';
      if (err === 'invalid_grant') {
        message = 'Wrong Login Credentials';
      }
     console.log(message);
    });
  }
}

