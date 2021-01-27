import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/cart/cart.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/files/interface';
import { PopularService } from 'src/app/service/popular/popular.service';
import { ProductService } from 'src/app/service/product/product.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  items_quantity: number = 0;
	favorites: IProduct[] = [];

	constructor(
		private router: Router,
		private _cartService: CartService,
		private _popularService: PopularService,
		private _productService: ProductService
	) {}

	ngOnInit(){	
		this.getItemsQuantity();
		this.getFavorite();
	}

	// Navigate to cart page
	goToCart(){
		this.router.navigateByUrl('cart');
	}

	// Set items quantity
	setItemsQuantity(){
		this._cartService.setTotalItemsQuantity();
	}

	// Get items quantity
	getItemsQuantity(){
		this._cartService.getItemsQuantity().subscribe(quantity => {
			this.items_quantity = quantity;
		});
	}

	// add to cart
	addToCart(product: IProduct){
		this._cartService.addToCart(product);
		// this.setItemsQuantity();
		this.getItemsQuantity();
	}

	// get favourite
	getFavorite(){
		this._popularService.getPopularDishes().subscribe(dishes => {
			dishes.forEach(dish => {
				if(dish.rate >= 4){
					this.favorites.push(dish);
				}
			})
		});

		this._popularService.getPopularDrinks().subscribe(drinks => {
			drinks.forEach(drink => {
				if(drink.rate >= 4){
					this.favorites.push(drink);
				}
			})
		})
	}

}
