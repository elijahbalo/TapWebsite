import { Component } from '@angular/core';
  import { UserService } from '../../services/users.service';
  import { Router } from '@angular/router';
  import {AccountService} from 'util/account-service';

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
      private userService: UserService, private router: Router, private accountSvc: AccountService
    ) { }
  
      signUp() {
      this.userService.signUp(this.username,
                             this.password, 
                             this.firstname, 
                             this.lastname, 
                             this.studentId, 
                             this.email).subscribe(res => {
        console.log("user was added successfully")
        this.router.navigateByUrl('signIn')
      },
        err => {
          console.log("there is an error")
        });
    }
    isSignedUp()
    {
      return this.accountSvc.isSignedUp();
    }
  }
    