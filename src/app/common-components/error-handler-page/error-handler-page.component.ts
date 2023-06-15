import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-error-handler-page',
  templateUrl: './error-handler-page.component.html',
  styleUrls: ['./error-handler-page.component.scss'],
})
export class ErrorHandlerPageComponent implements OnInit {
  constructor(public globalService: GlobalService) {}

  ngOnInit() {}

  retry() {
    this.globalService
      .checkInternetConnection()
      .then((val) => {
        if (
          this.globalService.network &&
          this.globalService.network.connected
        ) {
          window.history.back();
        }
      })
      .catch((e) => console.log(e));
  }
}
