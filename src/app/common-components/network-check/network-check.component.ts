import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-network-check',
  templateUrl: './network-check.component.html',
  styleUrls: ['./network-check.component.scss'],
})
export class NetworkCheckComponent implements OnInit {
  constructor(public globalService: GlobalService, public router: Router) {}

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
