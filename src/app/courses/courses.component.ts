import { Component, OnInit } from '@angular/core';

import { CartService } from "src/app/services/cart.service";

import {courses} from "./../courses-list";
import { Course } from "./../course.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public coursesList: Course[] = courses;

  // public cartContent: any[]= [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // this.cartContent = this.cartService.get();

  }

  public addToCart(id: string):void {
    this.cartService.add(id);
  }

}
