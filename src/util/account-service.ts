import { Injectable } from '@angular/core';


@Injectable()
export class AccountService {
  
    constructor() {
       
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('user-token') != null;
    }

} 