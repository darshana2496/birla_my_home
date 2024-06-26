import { Router } from '@angular/router';
import { IonSlides, MenuController } from '@ionic/angular';
import { GlobalService } from './../services/global.service';
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.page.html',
  styleUrls: ['pages.page.scss'],
})
export class PagesComponent {
  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    loop: false,
    mode: 'md',
    coverflowEffect: {
      maxBackfaceHiddenSlides: 2,
      depth: 0,
    },
  };

  constructor(
    public globalService: GlobalService,
    public storage: Storage,
    public menuCtrl: MenuController,
    public router: Router
  ) {}
  selectProject(index: number, projectObj: any) {
    this.globalService.customerId = projectObj.customerProjectId.toString(); //used in api calls
    this.globalService.activeSlideIndicator = index;
    this.globalService.selectedProjectObj = projectObj;
    this.globalService.fireDashboadEvent();
    this.storage.set(
      'ProjectCustomerId',
      projectObj.customerProjectId.toString()
    );

    // this.router.navigate(['dashboard']);
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: false })
      .then(() => {
        this.router
          .navigate(['/dashboard'])
          .then(() => console.log('Dashboard reloaded', this.router.url));
      });
    this.menuCtrl.close();
  }

  async openWebUrl() {
    await Browser.open({ url: `https://uat.loyalie.in/birla-loyalty-home?clientToken=${this.globalService.customerId}` });
  }

  openPage(action: string) {
    this.menuCtrl.close();
    this.router.navigate([action]);
    // if (this.globalService.currentlyActivePage != action) {
    // switch (action) {
    //     case "RewardListPage":
    //         // this.router.navigate(["RewardListPage"]);
    //         break;
    //     case "ReferFriendPage":
    //         // this.router.navigate(["ReferFriendPage"]);
    //         break;
    //     case "AboutBirlaPage":
    //         // this.router.navigate(["AboutBirlaPage"]);
    //         break;
    //     case "BlogPage":
    //         // this.router.navigate(["BlogPage"]);
    //         break;
    //     case "HelpSupportPage":
    //         // this.router.navigate(["HelpSupportPage"]);
    //         break;
    //     case "ResetPinPage":
    //         // this.router.navigate(["ResetPinPage"]);
    //         break;
    //     case "TermsOfUsePage":
    //         this.router.navigate(["TermsOfUsePage"]);
    //         this.router.navigate(["termuse"]);
    //         break;
    //     case "FeedbackQueryV2Page":
    //         // this.router.navigate(["FeedbackQueryV2Page"]);
    //         break;
    //     case "PrivacyPolicyPage":
    //         this.router.navigate(["privacypolicy"]);
    //         break;
    //     case "RefundCancelPage":
    //         this.router.navigate(["refundcancel"]);
    //         break;
    //     case "TermsNConditionPage":
    //         this.router.navigate(["termscondition"]);
    //         break;
    //     default:
    //         break;
    // }
    // }
  }

  addProject(): void {
    this.menuCtrl.close();
    this.router.navigate(['/add-project']);
  }

  logout(): void {
    this.globalService.showConfirmationAlertPrompt(
      'Logout',
      'Do you want to logout'
    );
  }
}
