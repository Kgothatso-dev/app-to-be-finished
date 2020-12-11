import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICategory } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService{

  categories: ICategory[] = [
      {
          id : 'cat1',
          name : 'Burger',
          description : 'Burgers ',
          image: '../../assets/cat/burgers/barbecued burger.jpg'
      },
      {
          id : 'cat2',
          name : 'Pizza',
          description : 'Pizza ',
          image: '../../assets/cat/pizza/chicken mayo.jpg'
      },
   
      {
          id : 'cat3',
          name : 'Drinks',
          description : 'Drinks',
          image: '../../assets/cat/drinks/drinks.jpg'
      }
  ];

  constructor() {
      
  }
  id: string;
  name: string;
  description: string;
  image: string;

  getCategories(): Observable<ICategory[]>{
      return of(this.categories);
  }

  getCategory(id: string): Observable<ICategory>{
      return of(this.categories.find(category => {
          return category.id == id;
      }));
  }
}

