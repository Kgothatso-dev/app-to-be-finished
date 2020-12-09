import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  slidesOptions = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true
  }
  

  constructor(private router: Router) {
   
     
  }

  
  MenuPage(){

    this.router.navigateByUrl('menu');

  }

  goToCart(){
    this.router.navigate(['cart']);
  }


}
