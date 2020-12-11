import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Popular } from 'src/app/files/cls';
import { Product } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class PopularService extends Popular{

  popular: Popular[] = [
    {
        id: '',
        product: {
            id: '',
            name: ' ',
            description: '  ',
            price: 1,
            category: '',
            image: ''
        },
    },
    {
        id: '',
        product: {
            id: '',
            name: '',
            description: '   ',
            price: 2,
            category: '',
            image: ''
        },
    },
    {
        id: '',
        product: {
            id: '',
            name: ' ',
            description: '  ',
            price: 3,
            category: '',
            image: ''
        },
    },
    {
        id: '',
        product: {
            id: '',
            name: '  ',
            description: '   ',
            price: 4,
            category: '',
            image: ''
        },
    },
    {
        id: '',
        product: {
            id: '',
            name: ' ',
            description: '  ',
            price: 5,
            category: '',
            image: ''
        },
    }
];

constructor() {
  super();
}

setPopular(product: Product){
    this.popular.push({
        id: '6',
        product
    });
}

getPopular(): Observable<Popular[]>{
    return of(this.popular);
}

getPopularById(id: string): Observable<Popular>{
    return of(
        this.popular.find(popular => {
            return popular.id == id;
    }));
}

  
}
