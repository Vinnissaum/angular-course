import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  platformUrl: string;

  courses: string[] = ['Java', 'Angular', 'Ext JS'];

  constructor() {
    this.platformUrl = 'https://loiane.tranining';
   }

  ngOnInit(): void {
  }

}
