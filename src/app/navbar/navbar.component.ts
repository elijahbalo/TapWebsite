import { Component, OnInit } from '@angular/core';
import {AccountService} from 'util/account-service';
import {UserService} from 'services/users.service';

@Component({
   selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.component.css']

})
export class NavComponent implements OnInit{
 
  constructor(private accountSvc: AccountService, private userService: UserService) 
  {}

  isLoggedIn()
  {
    return this.accountSvc.isLoggedIn();
  }

  logout() {
    return this.accountSvc.logout();
    // remove user from local storage to log user out
    
}
  ngOnInit() {}

}