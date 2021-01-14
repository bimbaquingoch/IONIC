import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetasPageRoutingModule } from './tarjetas-routing.module';

import { TarjetasPage } from './tarjetas.page';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TarjetasPage]
})
export class TarjetasPageModule {}
