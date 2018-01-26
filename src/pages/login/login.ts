import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
import { RefresherService } from './../../services/refresher.service';

@Component({
   selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username;
  password;
  constructor(
    private userService: UserService,
    private refresherService: RefresherService
  ) { }

  LogIn() {
    this.userService.signIn(this.username, this.password).subscribe(response => {
      localStorage.setItem('user-token', response.access_token);
      localStorage.setItem('refresh-token', response.refresh_token);
      this.refresherService.refresh();
      this.userService.getCurrentUserInfo().subscribe();
    }, err => {
      let message = 'Cannot Login';
      if (err === 'invalid_grant') {
        message = 'Wrong Login Credentials';
      }
     console.log(message);
    });
  }
}
