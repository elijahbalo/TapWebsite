import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RefresherService } from './../services/refresher.service';
import { AccountService } from './../util/account-service';
import { AuthService } from './../services/auth.service';
import { UserService } from './../services/users.service';
import { HomePage} from '../pages/home/home';
import { CoursePage} from '../pages/course/course';
import { CourseListPage} from '../pages/courseList/courseList';
import {SignInPage} from '../pages/signIn/signIn';
import {SignUpPage} from '../pages/signUp/signUp';
import {SettingsPage} from '../pages/settings/settings';
import {StudentPage} from '../pages/student/student';
import {AccountPage} from '../pages/account/account';
import { routes} from './app.router';
import { AppComponent } from './app.component';
import { NavComponent } from '../app/navbar/navbar.component';
import {AttendancePage} from '../pages/attendance/attendance'

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CourseListPage,
    CoursePage,
    SignInPage,
    SignUpPage,
    SettingsPage,
    StudentPage,
    AccountPage,
    NavComponent,
    AttendancePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ AuthService,
    UserService,
    AccountService,
    RefresherService],
  bootstrap: [AppComponent]
})
export class AppModule { }