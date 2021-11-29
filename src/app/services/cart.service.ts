import { Injectable } from '@angular/core';

import { LocalStorageService } from "src/app/services/local-storage.service";

import { Course } from "src/app/course.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartContent: any = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.cartContent = this.load();
  }

  add(productID?: string) {
    this.cartContent.filter((elem: Course) => elem.id === productID)[0] ? this.cartContent.filter((elem: Course) => elem.id === productID)[0].quantity++ : this.cartContent.push({id: productID, quantity: 1});
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

    this.localStorageService.set('cart', this.cartContent);
  }

  load() {
    return this.localStorageService.get('cart')
  }


  // public get() {
  //   return this.cartContent;
  // }

}
