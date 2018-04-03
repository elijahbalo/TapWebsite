import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
import { RefresherService} from './../../services/refresher.service';
import { AttendanceService} from './../../services/attendance.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Attendance} from "../../model/attendance";

@Component({
   selector: 'page-course',
  templateUrl: 'course.html',
  styleUrls: ['./course.css']
})
export class CoursePage  {
  enabled = false;
  date:String;
  time:String;
  lists: Attendance[]=[];
  courseId:String;

 constructor(
    private userService: UserService,
    private refresherService: RefresherService,
    private router: Router,
    private route:ActivatedRoute,
    private attendanceService: AttendanceService
    
  ) {
    this.courseId= route.snapshot.params['id'];
    console.log(this.courseId)
    this.displayAttendanceList()
   }
enableAttendance(id){
this.userService.enableAttendance(this.courseId, id).subscribe(response => {
this.router.navigate(["/attendance",this.courseId,id]);
console.log("attendance was enabled")
},err =>{
console.log("error enabling attendance") 
})
}

getDate(){
let date = new Date();
let dd = date.getDate();
let mm = date.getMonth()+1; 
let yyyy = date.getFullYear();

if(dd<10) {
   let d = '0'+dd
} 

if(mm<10) {
   let m = '0'+mm
} 

let newDate = mm + '/' + dd + '/' + yyyy;
return newDate;
}

getTime(){
  let date = new Date();
  let hour = date.getHours();
  let minute= date.getMinutes();
  let time = hour +':'+ minute;
  this.time=time;
  return time;
}

createAttendance() {
    this.attendanceService.createAttendance(this.courseId,this.getDate(),this.getTime()
                             ).subscribe(res => {
        console.log("new attendance created")
        this.displayAttendanceList();
      },
        err => {
          console.log("there is an error")
        });
  }

  displayAttendanceList(){
    this.attendanceService.getAttendance(this.courseId).subscribe(response =>{
      this.lists=[];
     response.attendance.forEach(res => {
        this.lists.push(new Attendance(
          res.date,
          res.time,
          res.attendanceCount,
          res._id
          ));
      });
    }, err => {
      console.log(err);
     
    })
  }

   navigateToAttendance(id){
      this.router.navigate(["/attendance",this.courseId,id]);
    }

}
