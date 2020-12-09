import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Cart, Product } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];
  totalItems = new BehaviorSubject<number>(0);
  amountDue = new BehaviorSubject<number>(0.0);

  constructor() { }

  clearCart(): void {
    this.cart = [];
    this.setAmountDue();
    this.setTotalItems();
  }

  findItem(id: string): Observable<Cart> {

    return of(this.cart.find(item => {
      return item.id == id;
    }));

  }

  setTotalItems(): void {

    let total = 0;
    this.cart.forEach(cartItem => {
      total += cartItem.quantity;
    });

    this.totalItems.next(total);

  }

  getTotalItems(): BehaviorSubject<number> {

    return this.totalItems;

  }

  getCartItems(): Observable<Cart[]> {
    return of(this.cart);
  }

  setAmountDue(): void {

    let totalPrice = 0.0;
    this.cart.forEach(item => {
      totalPrice += item.quantity * item.price;
    });
    this.amountDue.next(totalPrice);
  }

  getAmountDue(): BehaviorSubject<number> {
    return this.amountDue;
  }

  addToCart(product: Product) {

    let item: Cart;

    this.findItem(product.id).subscribe(cartItem => {
      item = cartItem;
    });

    if (item != null) {
      item.quantity++;
    }
    else {
      this.cart.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    this.setAmountDue();
    this.setTotalItems();
  }

  getItemIndex(id: string): Observable<number> {
    return of(this.cart.findIndex(i => {
      return id === i.id;
    }));
  }

  deleteItem(id: string): void {
    let index;
    let cartItem: Cart;

    this.findItem(id).subscribe(item => {
      cartItem = item;
    });

    this.getItemIndex(id).subscribe(i => {
      index = i;
    });

    if (index > -1) {

      if (cartItem.quantity > 1) {

        cartItem.quantity = cartItem.quantity - 1;
      }
      else {

        this.cart.splice(index, 1);
        if (this.cart.length < 1) {
          this.clearCart();
        }
      }
      this.setTotalItems();
      this.setAmountDue();
    }
  }


}


