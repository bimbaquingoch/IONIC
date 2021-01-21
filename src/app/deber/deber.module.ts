import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeberPageRoutingModule } from './deber-routing.module';

import { DeberPage } from './deber.page';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeberPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeberPage]
})
export class DeberPageModule {}
