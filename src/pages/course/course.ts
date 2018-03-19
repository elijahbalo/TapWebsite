import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
import { RefresherService} from './../../services/refresher.service';
import { Router } from '@angular/router';

@Component({
   selector: 'page-course',
  templateUrl: 'course.html',
  styleUrls: ['./course.css']
})
export class CoursePage  {
  enabled = false;
 constructor(
    private userService: UserService,
    private refresherService: RefresherService,
    private router: Router
    
  ) { }
enableAttendance(){
this.userService.enableAttendance().subscribe(response => {
console.log(response)
},err =>{
console.log(err) 
})
}

disableAttendance(){
this.userService.disableAttendance().subscribe(response => {
console.log(response)
},err =>{
console.log(err) 
})
}
createAttendance() {
  
    this.router.navigateByUrl('settingsPage')
  }

}
