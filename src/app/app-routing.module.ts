import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './pages/menu/menu.page';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },   {
    path: 'menu',
   component:MenuPage, children: [

    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
   ]
  },  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
