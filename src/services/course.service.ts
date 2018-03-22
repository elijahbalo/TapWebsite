import { UrlProvider } from './../util/url-provider';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CourseService {
  // Resolve HTTP using the constructor
  constructor(private http: Http, private authService: AuthService) { }
  // private instance variable to hold base url
  private Url = UrlProvider.url + '/api/courses';

  // method to get all comments for a specific event
  getCourses() {
    return this.http.get(this.Url + '/', this.getHeaders())
      .map((res: Response) => res.json());
  }


  private getHeaders() {
    // create authorization header with token
    let currentUser = localStorage.getItem('user-token');
    if (currentUser) {
      let headers = new Headers({
        'Authorization': 'Bearer ' + currentUser,
        'Content-Type': 'application/json',
      });
      return new RequestOptions({ headers: headers });
    }
  }
}


