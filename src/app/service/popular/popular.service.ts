import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICategory,IPopular, IProduct } from 'src/app/files/interface';
import { ProductService } from 'src/app/service/product/product.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PopularService {
	populars: IPopular[] = [];
	popular_dishes: IProduct[] = [];
	popular_drinks: IProduct[] = [];

	constructor(
		private firestore: AngularFirestore,
		private _productService: ProductService,
		private _categoryService: CategoryService
	) { }

	// Get popular dishes
	getPopularDishes(): Observable<IProduct[]>{
		return of(this.popular_dishes);
	}

	// Get popular drinks
	getPopularDrinks(): Observable<IProduct[]>{
		return of(this.popular_drinks);
	}

	// Get all populars
	getPopulars(): Observable<IPopular[]>{
		return of(this.populars);
	}

	// Get popular by id
	getPopularById(popular_id: string): Observable<IPopular>{
		return of(
			this.populars.find(popular => {
				return popular.id == popular_id;
			})
		);
	}
	
	// Set populars
	setPopulars(){
		let popular: IPopular;
		let product: IProduct;
		let category: ICategory;
		this.populars = [];
		this.popular_dishes = [];
		this.popular_drinks = [];
		this.firestore.collection('Populars').snapshotChanges().subscribe(firebase_response => {
			firebase_response.forEach(response => {
				popular = response.payload.doc.data() as IPopular;
				this.populars.push(popular);
				product = this._productService.getProductById(popular.product_id);
				category = this._categoryService.getCategoryById(product.category_id);
				this.setPopularTypes(product, category);
			});
		})
	}
	
	// Set popular types
	setPopularTypes(product: IProduct, category: ICategory){
		if(category.name == 'Drinks'){
			this.setPopularDrink(product);
		}
		else{
			this.setPopularDish(product);
		}
	}

	// Set popular 'Dishes'
	setPopularDish(product: IProduct){
		this.popular_dishes.push(product);
	}

	// Set popular 'Drinks'
	setPopularDrink(product: IProduct){
		this.popular_drinks.push(product);
	}
}
