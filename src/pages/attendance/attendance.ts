import { Component } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/users.service';
import { RefresherService} from './../../services/refresher.service';
import { AccountService } from './../../util/account-service';
import { User} from "../../model/user";

@Component({
  selector: "page-attendance",
  templateUrl: "attendance.html",
  styleUrls: ['./attendance.css']
})
export class AttendancePage {
  courseId:String;
  attendanceId: String;
  lists: User[]=[];

  constructor( private userService: UserService,
    private refresherService: RefresherService,
    private router: Router,
    private accountService: AccountService,
    private route:ActivatedRoute,
) {  
  this.attendanceId= route.snapshot.params['id'];
  this.courseId= route.snapshot.params['courseId'];
  console.log("attendance id: " + this.attendanceId)
  console.log("course id: " + this.courseId)
   refresherService.refresher.subscribe(a => {
      if (accountService.isLoggedIn()) {
        this.displayStudentList(() => { });
      }
    });
  
}
disableAttendance(){
this.userService.disableAttendance().subscribe(response => {
console.log(response)
},err =>{
console.log(err) 
})
}

displayStudentList(afterFetch: Function){
   this.userService.getUserList(this.attendanceId).subscribe(response =>{
      afterFetch();
      this.lists=[];
     response.user.forEach(res => {
        this.lists.push(new User(
          res.username,
          res.firstname,
          res.email,
          res.lastname,
          res.studentId,
          res._id
          ));
      });
    }, err => {
      console.log(err);
     
    })
  
}

testAttendance() {
      this.userService.testAttendance(this.courseId,
                             this.attendanceId, 
                             ).subscribe(res => {
        console.log("attendance worked")
      
      },
        err => {
          console.log("not working")
        });
    }
 
}