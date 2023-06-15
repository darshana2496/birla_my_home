import { ThankYouModalComponent } from './pages/thank-you-modal/thank-you-modal.component';
import { NavigationEnd, Router } from '@angular/router';
import { Component, Optional, ViewChild } from '@angular/core';
import { Network } from '@capacitor/network';
import {
  NavController,
  Platform,
  IonApp,
  MenuController,
  ModalController,
  PopoverController,
  LoadingController,
  ToastController,
  IonRouterOutlet,
  IonTabs,
} from '@ionic/angular';
import { App } from '@capacitor/app';
import { Storage } from '@ionic/storage-angular';
import { GlobalService } from './services/global.service';
import OneSignal from 'onesignal-cordova-plugin';
import { Subscription, timer } from 'rxjs';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('myNav') nav: NavController;

  rootPage: string;
  timerSubscription: Subscription;
  exitAppCount: number = 0;

  constructor(
    public storage: Storage,
    public globalService: GlobalService,
    public platform: Platform,
    public router: Router,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public device: Device,
    public diagnostic: Diagnostic,
    public popoverController: PopoverController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    @Optional() public routerOutlet: IonRouterOutlet,
    @Optional() public ionTab: IonTabs
  ) {
    storage.create();
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.globalService.currentlyActivePage = event.url;

        if (!this.globalService.isAppReviewed) {
          if (
            this.globalService.projectList &&
            this.globalService.projectList.length
          ) {
            this.showUserFeedbackPage();
          }
        }

        if (this.globalService.customerId) {
          this.timerSubscription = timer(0, 10000)
            .pipe(
              map(() => {
                this.getNotificationCount();
              })
            )
            .subscribe();
        }
      }
    });
    this.platform.ready().then(() => {
      App.addListener('backButton', () => {
        App.exitApp();
      });
      if (this.platform.is('cordova')) {
        this.diagnostic.isDeviceRooted().then((isRooted: boolean) => {
          if (isRooted) {
            setTimeout(() => {
              alert(
                'Birla Estate My Home app cannot run on rooted devices. Inconvenience regretted.'
              );
              App.exitApp();
            }, 2000);
          }
        });
      }
      this.OneSignalInit();
    });

    this.globalService
      .checkInternetConnection()
      .then((value) => {
        if (
          this.globalService.network &&
          this.globalService.network.connected
        ) {
          this.globalService
            .getNetworkCarrierInfo()
            .then((val) => {
              const iPaddress = val;
            })
            .catch((e) => {
              console.log(e);
            });
          storage.get('AccessPin').then((val) => {
            this.setInitialPage(val);
          });
        }
      })
      .catch((e) => {
        alert('Exception occured');
      });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  setInitialPage(pin: any): void {
    this.globalService.setInitialProject(); //used to get list of customerProjects added and get if isAppReviewd
    if (pin != null) {
      this.router.navigate(['enter-pin']);
    } else {
      this.storage.get('FirstTimeAppLoad').then((val) => {
        if (val == null) {
          this.router.navigate(['AppIntroPage']);
        } else {
          this.router.navigate(['loginwithcustid']);
        }
      });
    }
  }

  async showUserFeedbackPage() {
    this.globalService.getUserfeedback().then((data: number) => {
      if (data < 50 && data > 47) {
        switch (this.globalService.currentlyActivePage) {
          case '/set-pin':
          case '/enter-pin':
          case 'ReportLoginIssuePage':
          case '/dashboard':
          case '/vault':
          case '/payments':
          case '/notifications':
            break;

          default:
            this.globalService.showThankyouModal();
            break;
        }
      }
    });
  }

  OneSignalInit(): void {
    // NOTE: Update the setAppId value below with your OneSignal AppId.
    // OneSignal.setAppId('e456a2d5-bd2e-4e32-90eb-5c70ccdcfbf2');
    OneSignal.setAppId('c7280583-04a1-4799-ab34-c8590c0b4833');
    OneSignal.setNotificationOpenedHandler((jsonData) => {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
      console.log('User accepted notifications: ' + accepted);
    });

    OneSignal.getDeviceState((event) => {
      this.globalService.onesignalPlayerId = event.userId;
    });
  }

  getNotificationCount() {
    this.globalService
      .getNotificationCount()
      .then((response: any) => {
        if (response.btIsSuccess) {
          this.globalService.notification_count = response.object;
        } else {
          this.globalService.notification_count = 0;
        }
      })
      .catch((response: any) => {});
  }
}
