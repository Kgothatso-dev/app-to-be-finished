import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cart, Product } from 'src/app/files/interface';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Cart[];
  totalItems: number;
  totalAmount = 0.0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private popularServices: PopularService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.getCartItems();
    this.getTotalCartItems();
    this.getAmountDue();
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

  deleteItem(id: string) {
    this.cartService.deleteItem(id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(cart => {
      this.cart = cart;
    });
  }

  getTotalCartItems() {
    this.cartService.getTotalItems().subscribe(total => {
      this.totalItems = total;
    });
  }

  getAmountDue() {
    this.cartService.getAmountDue().subscribe(amount => {
      this.totalAmount = amount;
    });
  }

  clearCart() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to clear your cart ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cart not cleared !');
          }
        },
        {
          text: 'Clear',
          handler: () => {
            this.cartService.clearCart();
          }
        }
      ]
    });

    await alert.present();
  }

}