import { Component, OnInit } from '@angular/core';
import {AccountService} from 'util/account-service';

@Component({
   selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.component.css']

})
export class NavComponent implements OnInit{
 
  constructor(private accountSvc: AccountService) 
  {}

  isLoggedIn()
  {
    return this.accountSvc.isLoggedIn();
  }

  ngOnInit() {}
}
