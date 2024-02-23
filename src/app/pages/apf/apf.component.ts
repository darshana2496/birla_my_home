import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import * as _ from "lodash";

@Component({
  selector: 'app-apf',
  templateUrl: './apf.component.html',
  styleUrls: ['./apf.component.scss'],
})
export class APFComponent implements OnInit {

  apfData: any = [];

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
    this.getApfList()
  }

  getApfList() {
    this.globalService.getApfList().then((response: any) => {
      console.log("response",response)
      if(response.object){
        this.apfData = _.orderBy(response.object, ['vcTower'])
      } else {
        this.apfData = []
      }
    }).catch(e=>console.log(e))

  }

}
