import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CartService } from "src/app/services/cart.service";

import { Course } from 'src/app/course.model';
import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public course?: Course;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get("id");
      this.course = courses.filter(course => course.id === courseId)[0];
    });
  }

  public addToCart():void {
    this.cartService.add(this.course?.id);
  }

}
