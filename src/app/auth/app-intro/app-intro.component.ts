import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-app-intro',
  templateUrl: './app-intro.component.html',
  styleUrls: ['./app-intro.component.scss'],
})
export class AppIntroPage implements OnInit {
  public static pageName = "AppintroPage";
  showSplaash = false;
  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 300,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  }
  };

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      // console.log('enter in timeout');
      this.showSplaash = true
    },3000)
  }

  ngAfterViewInit() {
  }

}
