import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";

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
  }

}
