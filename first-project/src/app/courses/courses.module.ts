import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseService } from './course.service';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule { }
