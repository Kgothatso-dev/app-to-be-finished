import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartList = [];

  constructor() { }


  addToCart(cat){
    this.cartList.push({name: cat.name, colour: cat.colour, age: cat.age});
  }


 removeItemAll(cat) {
  var idx = this.cartList.indexOf(cat);
    if (idx !== -1) {
      this.cartList.splice(idx, 1);
    }
}


getCart(){

  return this.cartList;
}



setCart(cartList){

  this.cartList = cartList;
}


}
