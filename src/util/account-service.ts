import { Injectable } from '@angular/core';


@Injectable()
export class AccountService {
  
    constructor() {
       
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('user-token') != null;
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('auth_token');
        
      }
      isSignedUp(): boolean {
        return localStorage.getItem('user-token') != null;
    }
} 