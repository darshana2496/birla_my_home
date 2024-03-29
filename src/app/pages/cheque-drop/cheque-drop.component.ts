import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-cheque-drop',
  templateUrl: './cheque-drop.component.html',
  styleUrls: ['./cheque-drop.component.scss'],
})
export class ChequeDropComponent implements OnInit {
  dropLocationList: any = [];
  serverResponseMsg: string;
  constructor(
    public globalService: GlobalService,
    public socialShare: SocialSharing
  ) {}

  ngOnInit() {
    this.globalService
      .getCheckDropLocations()
      .then((response: any) => {
        if (response.btIsSuccess) {
          let obj = response.object;
          this.dropLocationList = obj;
        } else {
          this.serverResponseMsg = response.vcDescription;
        }
      })
      .catch((response: any) => {});
  }
  share(data) {
    let obj =
      'Location: ' + data.vcLocation + '. Description: ' + data.vcDescription;
    this.globalService.showLoader();
    this.socialShare
      .share(obj, data.vcName, null, null)
      .then((response: any) => {
        this.globalService.hideLoader();
      })
      .catch((error: any) => {});
  }
}
