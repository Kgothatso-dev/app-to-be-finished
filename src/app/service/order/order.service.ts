import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICart, IOrder } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
	orders: IOrder[] = [];

	constructor(
        private firestore: AngularFirestore,
    ) {
		
    }
	
	// Get orders
	getOrders(): Observable<IOrder[]>{
		return of(this.orders);
	}

	// Get Order by User Id
	getOrderByUserId(user_id: string): Observable<IOrder>{
		return of(this.orders.find(order => {
			return order.user_id == user_id;
		}))
	}

	// Get order by ID
	getOrderById(order_id: string): Observable<IOrder>{
		return of(this.orders.find(order => {
			return order.id == order_id;
		}))
	}

    order(id: string, cartItems: ICart[]){
    
		this.firestore.firestore.collection('Orders').add({
			
		});
	}

	cancelOrder(order_id: string){
		
	}

	setOrders(user_id: string){
		let order: IOrder;
		this.firestore.collection('Orders').snapshotChanges().subscribe(order_response => {
			order_response.forEach(response => {
				order = response.payload.doc.data() as IOrder;
				if(user_id == order.user_id){
					this.orders.push(order);
				}
			})
		})
	}
}

