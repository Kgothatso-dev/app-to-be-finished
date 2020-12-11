import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPopular, IProduct } from 'src/app/files/interface';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  popular: IPopular[] = [
    {
        id: 'pop1',
        product: {
            id: 'burger1',
            name: 'big mac ',
            description: ' big mac ',
            price: 85,
            category: 'burgers',
            image: '../../../assets/cat/burgers/big mac.jpg'
        }
    },
    {
        id: 'pop2',
        product: {
            id: 'pizza1',
            name: 'chicken mayo',
            description: 'chicken mayo',
            price: 65,
            category: 'pizza',
            image: '../../../assets/cat/pizza/chicken mayo.jpg'
        },
    },
    {
        id: 'pop3',
        product: {
            id: 'drinks1',
            name: 'drinks ',
            description: ' drinks ',
            price: 20,
            category: 'drinks',
            image: '../../../assets/cat/drinks/drinks.jpg'
        },
    },
      
];

constructor() {
}

setPopular(product: IProduct){
    this.popular.push({
        id: '3',
        product
    });
}

getPopular(): Observable<IPopular[]>{
    return of(this.popular);
}

getPopularById(id: string): Observable<IPopular>{
    return of(
        this.popular.find(popular => {
            return popular.id == id;
    }));
}

  
}
