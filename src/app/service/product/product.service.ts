import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private products: IProduct[] = [
     
      {
          id: '',
          name: ' ',
          description: '  ',
          price: 2,
          category: '',
          image: ''
      },
      {
          id: '',
          name: ' ',
          description: '  ',
          price: 2,
          category: '',
          image: ''
      },
      {
          id: '',
          name: '  ',
          description: '  ',
          price: 2,
          category: '',
          image: ''
      },
      {
          id: '',
          name: ' ',
          description: '  ',
          price: 9,
          category: '',
          image: ''
      },

    

      

      {
          id: '',
          name: '  ',
          description: '     ',
          price: 1,
          category: '',
          image: ''
      },
      {
          id: '',
          name: '  ',
          description: '   ',
          price: 9,
          category: '',
          image: ''
      },
     
     
  ];


  constructor() {
      
  }
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;

  getProducts(): Observable<IProduct[]>{
      return of(this.products);
  }

  getProduct(id: string): Observable<IProduct>{
      return of(this.products.find(product => {
          return product.id == id;
      }));
  }

  getProductsByCategoryId(categoryId: string): Observable<IProduct[]>{
      return of(this.products.filter(product => {
          return product.category == categoryId;
      }));
  }
}

