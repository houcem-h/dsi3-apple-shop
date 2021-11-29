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

  public cartContent: any[]= [];

  constructor() { }

  ngOnInit(): void {
    this.cartContent = JSON.parse(localStorage.getItem('cart') || '') || [];

  }

  public addToCart(id: String):void {
    this.cartContent.push(id);
    localStorage.setItem('cart', JSON.stringify(this.cartContent));
  }

}
