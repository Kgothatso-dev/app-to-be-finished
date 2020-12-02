import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './page/menu/tabs/tabs.page';
import { SidemenuPage } from './page/menu/sidemenu/sidemenu.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'detail',
    loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'sidemenu', component: SidemenuPage, children: [

     

      {
        path: 'tabs',
        component: TabsPage,
        children: [

          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
    
          {
            path: 'profile',
            loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
          },
          {
            path: 'contact',
            loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule)
          },
    

        ]
      },

    ]
   
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
