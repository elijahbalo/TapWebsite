import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { Course} from "../../model/course";

@Component({
   selector: 'page-courseList',
  templateUrl: 'courseList.html',
  styleUrls: ['./courseList.css']
})
export class CourseListPage {
courses: Course[] = [];
userId = "5a1f1ac2b8b6a80014434e30"
courseId = "5ac2bf8a734d1d4f8af9f37c"
num

 constructor(
      private courseService: CourseService, private router: Router, private userService: UserService
    ) {
     this.getCourses();
     }


    getCourses(){
    this.courseService.getCourses().subscribe(response => {
      this.courses = [];
      response.forEach(course => {
        this.courses.push(new Course(course.code,course.name,course.attendanceNum,course.numOfStudents,course._id));
      });
      console.log(this.courses)
    }, err => {
      console.log(err);
     
    })
    }
    
    navigateToCourse(id,num){
      this.router.navigate(["/course",id,num]);
    }

      populateCourses(){
        this.courseService.populateCourses(this.userId,
                             this.courseId).subscribe(res => {
        console.log("user was added successfully")
       
      },
        err => {
          console.log("there is an error")
        });

}
       populateUsers(){
        this.userService.populateUsers(this.userId,
                             this.courseId).subscribe(res => {
        console.log("user was added successfully")
  
      },
        err => {
          console.log("there is an error")
        });

}

}
