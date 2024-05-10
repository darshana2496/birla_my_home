import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InAppBrowser, InAppBrowserOptions} from '@awesome-cordova-plugins/in-app-browser/ngx';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss'],
})
export class ReferComponent implements OnInit {
  constructor(private inAppBrowser: InAppBrowser, public globalService: GlobalService, public router: Router) { }

  ngOnInit() {
    const options: InAppBrowserOptions = {
      toolbar: 'no',
      toolbarposition: 'top',
      closebuttoncaption: '',
      presentationstyle: 'pagesheet',
      fullscreen: 'yes',
      toolbartranslucent: 'yes',
      zoom: 'no',
      hideurlbar: 'yes',
      hardwareback: 'no',
      hidenavigationbuttons: 'yes'
    };
    const container = document.getElementById('web-view-container');
    const referWeb:any = this.inAppBrowser.create(`https://uat.loyalie.in/birla-loyalty-home?clientToken=${this.globalService.customerId}`, '_self',
    'presentationstyle=fullscreen,fullscreen=no,footer=yes,closebuttoncaption=Close,closebuttoncolor=#840c6f,lefttoright=yes,toolbar=no,toolbartranslucent=yes,zoom=no,hideurlbar=yes,hardwareback=yes,hidenavigationbuttons=yes,toolbarcolor=#ffffff,location=no');

    // Attach the web page to the container
    referWeb.insertCSS({ code: 'body {margin-top: 56px;}' }); // Adjust margin to accommodate header
    referWeb.on('loadstart').subscribe((event) => {
      if (event.url === 'about:blank') return;
      container.innerHTML = ''; // Clear container
      container.appendChild(referWeb);
    });


    referWeb.on('exit').subscribe((eve)=>{
      //App.exitApp();
      this.router.navigate(['/dashboard'])
    });
  }

}
