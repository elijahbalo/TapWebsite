import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';

@Component({
   selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.css']
})
export class SignUpPage {
  username;
  password;
  firstname;
  lastname;
  studentId;
  email;

  constructor(
    private userService: UserService
  ) { }

    signUp() {
    this.userService.signUp(this.username,
                           this.password, 
                           this.firstname, 
                           this.lastname, 
                           this.studentId, 
                           this.email).subscribe(res => {
      console.log("user was added successfully")
    },
      err => {
        console.log("there is an error")
      });

  }
}
