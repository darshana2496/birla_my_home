import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-terms-use',
  templateUrl: './terms-use.component.html',
  styleUrls: ['./terms-use.component.scss'],
})
export class TermsUsePage implements OnInit {
terms:string;
  constructor(public global:GlobalService) { }

  ngOnInit() {
    this.getTerms();
  }
  getTerms()
  {
    this.global.getTermOfUse().then((resp:any)=>{
      if (resp.btIsSuccess) {
        this.terms = resp.object.vcvalue;    
      } else {
        this.terms = "null";
      }
    }).catch((resp: any) => {
      
    });
   
  
  }
}
