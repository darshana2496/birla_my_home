import { Device } from '@awesome-cordova-plugins/device/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DateFormatPipe } from './utilities/pipes/date-format.pipe';
import { TimeInMinsFormatPipe } from './utilities/pipes/time-in-mins.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { NetworkCheckComponent } from './common-components/network-check/network-check.component';
import { ErrorHandlerPageComponent } from './common-components/error-handler-page/error-handler-page.component';
import { CommonComponentsModule } from './common-components/common-components.module';
@NgModule({
  declarations: [
    AppComponent,
    NetworkCheckComponent,
    ErrorHandlerPageComponent,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    DateFormatPipe,
    TimeInMinsFormatPipe,
    SocialSharing,
    Device,
    Diagnostic,
    HTTP,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CommonComponentsModule,
  ],
})
export class AppModule {}
