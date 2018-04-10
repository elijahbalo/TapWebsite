import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendancePage} from '../pages/attendance/attendance';
import { AppComponent } from './app.component';
import { HomePage} from '../pages/home/home';
import { CoursePage} from '../pages/course/course';
import { CourseListPage} from '../pages/courseList/courseList';
import {SignInPage} from '../pages/signIn/signIn';
import {SignUpPage} from '../pages/signUp/signUp';
import {SettingsPage} from '../pages/settings/settings';
import {StudentPage} from '../pages/student/student';
import {AccountPage} from '../pages/account/account';
import { NavComponent } from '../app/navbar/navbar.component'

export const router: Routes = [
     {path: '', redirectTo: 'home', pathMatch: 'full'}, 
     {path: 'home', component: HomePage},
     {path: 'course/:id/:num', component: CoursePage},
     {path: 'signIn', component: SignInPage},
     {path: 'attendance/:courseId/:id', component: AttendancePage},
     {path: 'signUp', component: SignUpPage},
     {path: 'studentPage', component: StudentPage},
     {path: 'settingsPage', component: SettingsPage},
     {path: 'courseListPage', component: CourseListPage},
     {path: 'accountPage', component: AccountPage},
     {path: 'navComponent', component: NavComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);