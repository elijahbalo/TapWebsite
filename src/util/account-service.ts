import { Injectable } from '@angular/core';


@Injectable()
export class AccountService {
  
    constructor() {
       
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('user-token') != null;
    }
    logout() {
        localStorage.removeItem('user-token');
    localStorage.removeItem('refresh-token');
    let userData = localStorage.getItem('userData');
    if (userData) {
      localStorage.removeItem('userData')
    }
      }
      isSignedUp(): boolean {
        return localStorage.getItem('user-token') != null;
    }
} 