import { Component, OnInit } from '@angular/core';
import {AccountService} from 'util/account-service';
import {UserService} from 'services/users.service';
import { Router } from '@angular/router';

@Component({
   selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.component.css']

})
export class NavComponent implements OnInit{
 
  constructor(private accountSvc: AccountService, 
              private router: Router,
              private userService: UserService) 
  {}

  isLoggedIn()
  {
    return this.accountSvc.isLoggedIn();
  }

  logout() {
    this.accountSvc.logout();
}
  ngOnInit() {}

}