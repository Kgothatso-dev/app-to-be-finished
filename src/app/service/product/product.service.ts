import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/files/interface';
import { LocalService } from '../local/local.service';
import { ICategory } from './../../files/interface';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductService{}

//   private products: IProduct[] = [
  
// 	products: IProduct[] = [];

// 	constructor(
// 		private firestore: AngularFirestore,
// 		private _local_db: LocaldbService
// 	) { }

// 	// Get all products
// 	getProducts(): Observable<IProduct[]>{
// 		return of(this.products);
// 	}

// 	// Set all products
// 	setProducts(){
// 		let product: IProduct;
// 		return  this.firestore.collection('Products').snapshotChanges().subscribe(firebase_response => {
// 			firebase_response.forEach(response => {
// 				let product: IProduct = response.payload.doc.data() as IProduct;
// 				this.products.push(product);
// 			});
// 		});
// 	}

// 	// Get product By Id
// 	getProductById(product_id){
// 		let response_product: IProduct = this.products.find(
// 			product => {
// 				return product.id == product_id;
// 			}
// 		);
// 		return response_product;
// 	}

// 	// Get product by category Id
// 	getProductsByCategoryId(category_id){
// 		let response_products: IProduct[] = [];
// 		this.products.forEach(product => {
// 			if(product.category_id == category_id){
// 				response_products.push(product);
// 			}
// 		})
// 		return response_products;
// 	}

// }
