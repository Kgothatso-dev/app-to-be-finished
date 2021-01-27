import { Component, OnInit } from '@angular/core';
import { IOrder, IUser } from 'src/app/files/interface';
import { OrderService } from 'src/app/service/order/order.service';
import { UserService } from 'src/app/service/user/user.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  user: IUser;
	orders: IOrder[] = [];

	constructor(
		private _userService: UserService,
		private _orderService: OrderService
	) { }

	ngOnInit() {
		this.getUserId();
		// this.setOrders(this.user.id);
		this.getOrders();
	}

    getUserId(){
        this._userService.getUserID().then(user => {
            if(user){
                this.getUser(user.uid);
            }
        });
    }

    getUser(id: string){
        this._userService.getUser(id).subscribe(user => {
            this.user = user as IUser;
        });
	}
	
	// Set orders
	setOrders(user_id: string){
		this._orderService.setOrders(user_id);
	}

	// Get orders
	getOrders(){
		this._orderService.getOrders().subscribe(orders => {
			this.orders = orders;
		})
	}
}

