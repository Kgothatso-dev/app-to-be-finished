import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ICart, IProduct } from 'src/app/files/interface';
import { ProductService } from 'src/app/service/product/product.service';
import { LocalService } from './../local/local.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ICart[] = [];

    items_quantity = new BehaviorSubject<number>(0);
    amountDue = new BehaviorSubject<number>(0.0);

    constructor(
        private _localDb: LocalService,
        private _productService: ProductService
    ) {
    }

    clearCart(): Observable<ICart[]>{
        return of(this.cart = []);
    }

    getCartItems(): Observable<ICart[]>{
        return of(this.cart);
    
    }

    getItemsQuantity(): Observable<number>{
        this.setTotalItemsQuantity();
        return this.items_quantity;
    }

    getAmountDue(): BehaviorSubject<number> {
        return this.amountDue;
    }

    setCartItems(){
        this._localDb.clear('cart');
        this._localDb.setLocal('cart', this.cart);
    }

    getCartItemsStorage(): Observable<ICart[]>{
        this.cart = this._localDb.getLocal('cart');
        return of(this.cart);
    }

    findCartItem(product_id: string): Observable<ICart>{
        return of(this.cart.find(item => {
            return item.id == product_id;
        }));
    }

    setAmountDue(): void {
        let totalPrice = 0.0;
        this.cart.forEach(item => {
            totalPrice += item.quantity * item.price;
        });
        this.amountDue.next(totalPrice);
    }

    SetItemQuantity(product_id: string){
        let cart_item: ICart;
        this.findCartItem(product_id).subscribe(item => {
            cart_item = item;
            if(cart_item){
                cart_item.quantity++;
            }
            this.setAmountDue();
        });
    }

    setTotalItemsQuantity(): void{
        let total: number = 0;
        this.cart.forEach(item => {
            total += item.quantity;
        });
        this.items_quantity.next(total);
    }   

    addToCart(product: IProduct){
        this.findCartItem(product.id).subscribe(item => {
            if(item){
                this.SetItemQuantity(item.id);
            }
            else{
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                    rate: product.rate,
                    category_id: product.category_id
                });
            }
            this.setTotalItemsQuantity();
            this.setAmountDue();
        });
    }    

    getItemIndex(id: string) : Observable<number>{
        return of(this.cart.findIndex(i => {
            return id === i.id;
        }));
    }

    deleteItem(id: string): void{
        let index;
        let cartItem: ICart;
        this.findCartItem(id).subscribe(item => {
            cartItem = item;
        });
        this.getItemIndex(id).subscribe(i => {
            index = i;
        });
        if (index > -1){
            if (cartItem.quantity > 1){
                cartItem.quantity = cartItem.quantity - 1;
            }
            else{
                this.cart.splice(index, 1);
                if (this.cart.length < 1){
                    this.clearCart();
                }
            }
            this.setTotalItemsQuantity();
            this.setAmountDue();
        }
    }
}
