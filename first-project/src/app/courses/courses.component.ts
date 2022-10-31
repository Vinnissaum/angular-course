import { Component, OnInit } from '@angular/core';

import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  platformUrl: string;

  courses: string[];

  constructor(private courseService: CourseService) {
    this.platformUrl = 'https://loiane.tranining';
    this.courses = courseService.getCourses();
   }

  ngOnInit(): void {
  }

}
