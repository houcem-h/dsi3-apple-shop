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
    this.cartContent.filter(elem => elem.id === id)[0] ? this.cartContent.filter(elem => elem.id === id)[0].quantity++ : this.cartContent.push({id: id, quantity: 1});
    // equivalent to
    // if(this.cartContent.filter(elem => elem.id === id)[0]) {
    //   this.cartContent.filter(elem => elem.id === id)[0].quantity++
    // } else {
    //   this.cartContent.push({id: id, quantity: 1})
    // }
    // Hedi's question
    // if(!this.cartContent.filter(elem => elem.id === id)[0]) {
    //   this.cartContent.push({id: id, quantity: 1})
    // }

    localStorage.setItem('cart', JSON.stringify(this.cartContent));
  }

}
