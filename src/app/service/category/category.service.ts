import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements Category{

  catogories: Category[] = [
      {
          id : 'category0001',
          name : 'Burger',
          description : 'Burgers category description',
          image: '../../../assets/categories/burgers/burger-category.png'
      },
      {
          id : 'category0002',
          name : 'Pizza',
          description : 'Pizza category description',
          image: '../../../assets/categories/pizza/pizza-category.jpg'
      },
      {
          id : '  ',
          name : 'Desert',
          description : 'Desert category description',
          image: '../../../assets/categories/desert/desert-category.jpg'
      },
      {
          id : 'category0004',
          name : 'Food',
          description : 'Food category description',
          image: ///food-category.jpg'
      }
  ];

  constructor() {
      super();
  }
  id: string;
  name: string;
  description: string;
  image: string;

  getCategories(): Observable<Category[]>{
      return of(this.catogories);
  }

  getCategory(id: string): Observable<Category>{
      return of(this.catogories.find(category => {
          return category.id == id;
      }));
  }
}

