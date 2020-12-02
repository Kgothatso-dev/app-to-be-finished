import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {


  pathsList  = [


    {

      name: 'Home',
      path: 'tabs/home',
      icon : 'home'
    },
    
    {

      name: 'Profile',
      path: 'tabs/profile',
      icon : 'person'
    },
    
    {

    name: 'Contact',
    path: 'tabs/contact',
    icon : 'call'
  }

 
]

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goProfile(){

    this.router.navigateByUrl('sidemenu/profile');
  }

  goContact(){

    this.router.navigateByUrl('sidemenu/contact');
  }


  moveToPath(path){

    this.router.navigateByUrl('sidemenu/' + path.path);

  }

}
