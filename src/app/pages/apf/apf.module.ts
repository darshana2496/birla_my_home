import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APFRoutingModule } from './apf-routing.module';
import { APFComponent } from './apf.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { PipesModule } from 'src/app/utilities/pipes/pipes.module';


@NgModule({
  declarations: [
    APFComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    CommonComponentsModule,
    APFRoutingModule
  ],
  providers: []
})
export class APFModule { }
