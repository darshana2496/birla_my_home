import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  notification_count: any = 0;
  constructor(public globalService: GlobalService) {}

  ngOnInit() {}

  onTabChange() {
    this.globalService
      .getNotificationCount()
      .then((response: any) => {
        if (response.btIsSuccess) {
          this.notification_count = response.object;
        } else {
          this.notification_count = 0;
        }
      })
      .catch((response: any) => {});
  }
}
