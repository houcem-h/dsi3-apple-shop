import { Component, OnInit } from '@angular/core';

import {courses} from "./../courses-list";
import { Course } from "./../course.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList: Course[] = courses;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.coursesList);
  }

}
