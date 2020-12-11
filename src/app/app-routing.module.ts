import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './pages/menu/menu.page';
import { TabsPage } from './pages/tabs/tabs.page';


const routes: Routes = [


  {
    path: 'menu',
    component: MenuPage, children: [

    ]
  },

  {
    path: 'tabs',
    component: TabsPage, children: [
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      },
      {
        
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
    
      {
        path: 'maps',
        loadChildren: () => import('./pages/maps/maps.module').then( m => m.MapsPageModule)
      },
    ]
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category/category.module').then( m => m.CategoryPageModule)
  },
  
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
