import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddressInfoComponent } from './address-info/address-info.component';
import { AssetsPreviewComponent } from './assets-preview/assets-preview.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, AddressInfoComponent, AssetsPreviewComponent],
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [HeaderComponent, AddressInfoComponent, AssetsPreviewComponent],
})
export class CommonComponentsModule {}
