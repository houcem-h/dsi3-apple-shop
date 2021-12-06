import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";

import { courses } from "src/app/courses-list";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartContent: any = [];

  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    this.cartContent = this.cartService.cartContent;
    for (let index = 0; index < this.cartContent.length; index++) {
      const course = courses.filter(course => course.id == this.cartContent[index].id)[0];
      this.cartContent[index].title = course.title;
      this.cartContent[index].price = course.price;
    }
  }

}
