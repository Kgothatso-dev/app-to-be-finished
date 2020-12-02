import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  cartList = [];
  count;

  constructor(private cartDao: CartService) { }

  ngOnInit() {


    this.cartList = this.cartDao.getCart();

    this.count =this.cartList.length;



  }


  delete(cart){

  this.cartDao.removeItemAll(cart);

    //this.cartDao.setCart(array);


    this.cartList = this.cartDao.getCart();

    this.count =this.cartList.length;

  
  }

}
