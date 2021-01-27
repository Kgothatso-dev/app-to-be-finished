import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, IUser } from 'src/app/files/interface';
import { ProductService } from 'src/app/service/product/product.service';
import { UserService } from 'src/app/service/user/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: IUser;
	product: IProduct;
	products: IProduct[] = [];
	
	constructor(
		private router: Router,
		private _userService: UserService,
		private activatedRoute: ActivatedRoute,
		private _productService: ProductService,
	) { }

	ngOnInit() {
		this.getUserId();
	}

	getUserId(){
		this._userService.getUserID().then(user => {
			if(user){
				this.getUser(user.uid);
			}
		});
	}

	getUser(user_id: string){
		this._userService.getUser(user_id).subscribe(user => {
			this.user = user as IUser;
		});
	}
}
