import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelLocationPageRoutingModule } from './del-location-routing.module';

import { DelLocationPage } from './del-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelLocationPageRoutingModule
  ],
  declarations: [DelLocationPage]
})
export class DelLocationPageModule {}
