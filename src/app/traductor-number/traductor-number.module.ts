import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraductorNumberPageRoutingModule } from './traductor-number-routing.module';

import { TraductorNumberPage } from './traductor-number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraductorNumberPageRoutingModule
  ],
  declarations: [TraductorNumberPage]
})
export class TraductorNumberPageModule {}
