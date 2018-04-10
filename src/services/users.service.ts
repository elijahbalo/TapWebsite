import { AccountService } from './../util/account-service';
import { AuthService } from './auth.service';
// Imports
import { Injectable } from '@angular/core';
//import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UrlProvider } from "../util/url-provider";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private loggedIn =false;
  // Resolve HTTP using the constructor
  constructor(private http: Http, private authService: AuthService, private accountService: AccountService) { 
    this.loggedIn = !!localStorage.getItem('auth_token');

  }
  // private instance variable to hold base url
  private Url = UrlProvider.url + '/api/users';

  // Fetch all existing IDs and Secrets
  getUsers(): Observable<any> {

    // ..using get Request Options
    return this.http.get(this.Url)
      // ...and calling .json() on the response to return data
      .map((res) => res.json())
      //..errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  signIn(username, password) {
    return this.authService.signIn(username, password);
  }

  getCurrentUserInfo() {
    let token = localStorage.getItem('user-token');
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.Url + '/info', { headers: head })
      .map((res: Response) => res.json())
      .map(response => localStorage.setItem('userData', JSON.stringify(response)));
  }
    
  getUserList(id){
    let token = localStorage.getItem('user-token');
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.Url + '/attendance/' + id, { headers: head })
      .map((res: Response) => res.json());

  }
    getUserCourses(userId) {
      let token = localStorage.getItem('user-token');
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(this.Url + '/' + userId , { headers: head })
      .map((res: Response) => res.json());
  }

   populateUsers(userId, courseId){
      let token = localStorage.getItem('user-token');
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.Url + '/user/' + userId + '/course/' +courseId , { headers: head })
      .map((res: Response) => res.json());
  }
  
  getUserInfo(id) {
    let token = localStorage.getItem('user-token');
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.Url + '/userinfo/' + id, { headers: head })
      .map((res: Response) => res.json());
  }

  enableAttendance(courseId, attendanceId) {
       let data = {
      "courseId": courseId,
      "attendanceId": attendanceId
    }

    let body = JSON.stringify(data);
    let token = localStorage.getItem('user-token');
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.Url + '/enable/' ,body, { headers: head })
      .map((res: Response) => res.json());
  }

  disableAttendance() {
    let token = localStorage.getItem('user-token');
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.Url + '/disable/' , { headers: head })
      .map((res: Response) => res.json());
  }
 
   testAttendance(courseId, attendanceId) {
    let token = localStorage.getItem('user-token');
    let num = '7309156';
    let head = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.Url + '/course/'+ courseId + '/attendance/' + attendanceId + '/user/' +num, { headers: head })
      .map((res: Response) => res.json());
  }

  signUp(username, password, firstname, lastname, studentId, email): Observable<Response> {
    let data = {
      "client_id": "android",
      "client_secret": "myClientSecret",
      "username": username,
      "password": password,
      "firstname": firstname,
      "lastname": lastname,
      "studentId": studentId,
      "email": email
    }
    let body = JSON.stringify(data); //put the data in a string form so it can be easily sent
    let head = new Headers({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + token
    });

    return this.doSignUpPost(body, head);
  }


  doSignUpPost(body, head) {
    return this.http.post(this.Url, body, { headers: head })
      .map((res) => {
        return res.json;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  login(username, password) {
    return this.http
      .post(
        '/login', 
        { username, password }
      )
      .map((res: any) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
          console.log("login successful 2")
        }

        return res.success;
      });
  }
  
  isLoggedIn() {
    return this.loggedIn;
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    console.log("logout successful")
  }
}
