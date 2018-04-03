import { Component } from '@angular/core';
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

 constructor(
      private courseService: CourseService, private router: Router
    ) {
     this.getCourses();
     }


    getCourses(){
    this.courseService.getCourses().subscribe(response => {
      this.courses = [];
      response.forEach(course => {
        this.courses.push(new Course(course.code,course.name,course.attendanceNum,course._id));
      });
      console.log(this.courses)
    }, err => {
      console.log(err);
     
    })
    }at
    
    navigateToCourse(id){
      this.router.navigate(["/course",id]);
    }

}
