import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  options = {
    slidesPerView: 1.5,
    spaceBetween: 1,
    centeredSlides: true,
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
