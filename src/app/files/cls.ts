import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, Category, Popular, Product, User } from './interface';


export abstract class Product {
    abstract getProducts(): Observable<Product[]>;
    abstract getProduct(id: string): Observable<Product>;
    abstract getProductsByCategoryId(categoryId: string): Observable<Product[]>;
}


export abstract class Category{
    abstract getCategories(): Observable<Category[]>;
    abstract getCategory(id: string): Observable<Category>;
}


export abstract class Cart {
    abstract deleteItem(id: string): void;
    abstract clearCart(): void;
    abstract addToCart(product: Product);
    abstract findItem(id: string): Observable<Cart>;
    abstract setTotalItems(): void;
    abstract getTotalItems(): BehaviorSubject<number>;
    abstract getCartItems(): Observable<Cart[]>;
    abstract getAmountDue(): BehaviorSubject<number>;
    abstract setAmountDue(): void;
    abstract getItemIndex(id: string): Observable<number>;
}

export abstract class Popular{
    abstract setPopular(product: Product);
    abstract getPopular(): Observable<Popular[]>;
    abstract getPopularById(id: string): Observable<Popular>;
}

export abstract class User{
    abstract addUser(id: string, user: User): void;
}
