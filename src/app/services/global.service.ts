import { PaymentGatewayResponseComponent } from './../pages/payment-gateway-response/payment-gateway-response.component';
import { AssetsPreviewComponent } from './../common-components/assets-preview/assets-preview.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from '../environments/environment';
import * as CryptoJS from 'crypto-js/crypto-js';
import { AlertController, MenuController } from '@ionic/angular';
import { GET_IP_API_URL } from '../utilities/constants/globals';
import {
  ICustomerProject,
  IRazorPaySuccess,
} from '../utilities/constants/commonInterface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ThankYouModalComponent } from '../pages/thank-you-modal/thank-you-modal.component';
import { AddedProjectSuccessComponent } from '../pages/added-project-success/added-project-success.component';
import { HTTP } from '@ionic-native/http/ngx';
import { Checkout } from 'capacitor-razorpay';
import { EventEmitter } from '@angular/core';
import { Network } from '@capacitor/network';
declare var RazorpayCheckout: any;
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  projectList: any[];
  customerId: number;
  activeSlideIndicator: number = 0;
  urls = environment.serverUrl;
  network: any;
  deviceIP: any;
  encryptSecretKey = 'AAECAwQFBgcICQoLDA0ODw==';
  commonheaderObj = {
    userName: 'CPAppbirlaestate',
    password: 'CPAppbirla!@#123',
  };
  tdsFilterObject: any = {
    documentType: '',
    startDate: '',
    endDate: '',
  };
  //razorPayAuth data
  razorPayAuth = {
    vcKeyId: '',
    vcKeySecret: '',
  };
  encryptedCustId: String;
  setPinValue: string;
  isPhoneUnlocked: boolean = false;
  selectedProjectObj: ICustomerProject = {
    customerProjectId: 0,
    customerName: '',
    projectImage: '',
    projectName: 'Test',
    userName: '',
  };
  logCustomerDetail: any;
  downloadCollateral: any;
  enteredPin: string;
  appOpenedOnlyFromNotification: boolean = false;
  notificationMsg: any = null;
  private showNotificationTabSubject = new Subject<any>();
  showNotificationTab = this.showNotificationTabSubject.asObservable();
  clearPinInput = new Subject<any>();
  currentlyActivePage: any;
  isAppReviewed: boolean;
  isShowingLoader: boolean;
  notification_count = 0;
  deviceId: any;
  onesignalPlayerId: any;
  eventsample: EventEmitter<any> = new EventEmitter();
  constructor(
    public _http: HttpClient,
    public storage: Storage,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public route: Router,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public _httpnative: HTTP
  ) {}
  getTermOfUse() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(`${this.urls}config/getConfigData/UseTerm`)
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  fireDashboadEvent() {
    this.eventsample.emit(true);
  }
  vaultBirlaUploads(obj) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .post(
          environment.serverUrl + 'Uploads/getuploadeddocument',
          JSON.stringify(obj)
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  
  getApfList() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          `${environment.serverUrl}project/getProjectAPF/${this.customerId}`
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        }).catch(e=>reject(e));
    });
    return promise;
  }
  getAboutBirlaEstates() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(environment.serverUrl + 'project/getProjects')
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getConfigData() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(environment.serverUrl + 'config/getConfigData')
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  postFeedback(obj: any) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .post(
          environment.serverUrl + 'config/raisefeedback',
          JSON.stringify(obj)
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getRMDetails() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(environment.serverUrl + 'config/getrmdetail/' + this.customerId)
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getRegisterOffices() {
    // https://portalapi.birlaestates.com/api/config/getraisedfeedBack/600014
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          environment.serverUrl + 'config/getregisteroffices/' + this.customerId
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getAllRaisedFeedback() {
    // https://portalapi.birlaestates.com/api/config/getraisedfeedBack/600014
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          environment.serverUrl + 'config/getraisedfeedBack/' + this.customerId
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  vaultMyUploads() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          environment.serverUrl +
            'Uploads/getuseruploadedddocument/' +
            this.customerId
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getCheckDropLocations() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          environment.serverUrl +
            'Payment/getchequedroplocations/' +
            this.customerId
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getChequeDropLocation() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          environment.serverUrl +
            'Payment/getchequedroplocations/' +
            this.selectedProjectObj.customerProjectId
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  raiseFeedback(obj: any) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .post(
          environment.serverUrl + 'config/raisefeedback ',
          JSON.stringify(obj)
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getFAQ() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(environment.serverUrl + 'config/getFAQs')
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  sanitizeHtml(rawHtml: any) {
    var txt = document.createElement('textarea');
    txt.innerHTML = rawHtml;
    return txt.value;
  }
  openNotificationTab() {
    this.showNotificationTabSubject.next(true);
  }
  clearPinInputs(): void {
    this.clearPinInput.next(true);
  }
  getProjectDetails() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          environment.serverUrl + 'Project/getprojectdetail/' + this.customerId
          //need to replace tempIdforProject with customerId after merge
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  previewImage(imgUrl: string) {
    let navParam = {
      fileType: 'jpg',
      isDownloaded: false,
      vcFileUrl: imgUrl,
    };
    this.showPreviewImageModal(navParam);
  }
  showDownloadToast(
    message: string,
    navParam: any,
    duration: number,
    position: string
  ) {
    let pos;
    switch (position) {
      case 'top':
        pos = 'top';
        break;
      case 'bottom':
        pos = 'bottom';
        break;
      case 'middle':
        pos = 'middle';
        break;
    }
    this.downloadCollateral = this.toastCtrl
      .create({
        message: message,
        duration: duration,
        position: pos,
      })
      .then((x) => {
        x.present();
        x.onDidDismiss().then((resolve) => {
          return;
        });
      });
  }

  updateCustomerNotification() {
    let obj = {
      vcCustomerID: this.customerId,
    };

    let promise = new Promise((resolve, reject) => {
      this._http
        .post(
          environment.serverUrl + 'v1/config/updatecustomernotification',
          obj
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getNotifications() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(
          environment.serverUrl + 'config/getnotification/' + this.customerId
        )
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  async showConfirmationAlertPrompt(title: string, subTitle: string) {
    const alert = this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      buttons: [
        {
          text: 'Yes',
          handler: (data) => {
            this.storage.remove('AccessPin');
            if (this.menuCtrl.isOpen()) {
              this.menuCtrl.close().then((response: any) => {
                this.route.navigate(['/loginwithcustid']);
                this.clearAllAddedProjects();
              });
            } else {
              this.route.navigate(['/loginwithcustid']);
            }
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {},
        },
      ],
    });
    (await alert).present();
  }
  clearAllAddedProjects() {
    this.storage.remove('ProjectList');
    this.storage.remove('ProjectCustomerId');
    this.storage.remove('ProjectCustomerName');
    this.projectList = [];
  }
  async setInitialProject() {
    let promise = new Promise((resolve, reject) => {
      this.storage
        .get('ProjectList')
        .then((data) => {
          if (data == null) {
            //first time load
            this.projectList = [];
            this.customerId = 0;
          } else {
            this.projectList = data;
            this.storage.get('ProjectCustomerId').then((response: any) => {
              this.customerId = response;
              for (let q = 0; q < data.length; q++) {
                if (data[q].customerProjectId == response) {
                  this.activeSlideIndicator = q;
                  this.selectedProjectObj = data[q];
                }
              }
            });
          }
          resolve(true);
        })
        .catch(() => {});

      this.checkAppReview();
    });
    return promise;
  }

  //check is app is reviewed or not
  async checkAppReview() {
    this.storage
      .get('AppReviewed')
      .then((data) => {
        if (data == null) {
          this.isAppReviewed = false;
        } else {
          this.isAppReviewed = true;
        }
      })
      .catch((data) => {});
  }

  headerSticky(e) {
    var topPos = e.detail.scrollTop;
    if (topPos >= 150) {
      if (this.currentlyActivePage == '/about-birla') {
        document
          .getElementsByTagName('app-about')[0]
          .getElementsByTagName('app-header')[0]
          .classList.remove('typ-transparent');
      }
      if (this.currentlyActivePage == '/dashboard') {
        document
          .getElementsByTagName('app-dashboard')[0]
          .getElementsByTagName('app-header')[0]
          .classList.remove('typ-transparent');
      }
    } else {
      if (this.currentlyActivePage == '/about-birla') {
        document
          .getElementsByTagName('app-about')[0]
          .getElementsByTagName('app-header')[0]
          .classList.add('typ-transparent');
      }
      if (this.currentlyActivePage == '/dashboard') {
        document
          .getElementsByTagName('app-dashboard')[0]
          .getElementsByTagName('app-header')[0]
          .classList.add('typ-transparent');
      }
    }
  }
  async validateCustomerLogic(typedText: number) {
    let promise = new Promise((resolve, reject) => {
      var pasedInt = typedText.toString();
      this.encryptedCustId = this.encryptData(pasedInt);
      if (pasedInt.length) {
        let obj = {
          vcCustomerID: this.encryptedCustId,
          vcIp: '',
          vcDeviceID: this.onesignalPlayerId,
          // vcDeviceID: "db377163-09a3-48f6-a93f-13210a82f3ea"
        };

        this.validateCustomer(obj)
          .then((data: any) => {
            if (data.btIsSuccess) {
              this.customerId = typedText;
              resolve(data);
            } else {
              resolve(data);
            }
          })
          .catch((data: any) => {
            reject(data);
          });
      }
    });
    return promise;
  }
  validateCustomer(obj) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .post(environment.serverUrl + 'account/validateCustomer', obj)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((response) => {
          reject(response);
        });
    });
    return promise;
  }
  encryptData(msg) {
    var keySize = 256;
    var salt = CryptoJS.lib.WordArray.random(16);
    var key = CryptoJS.PBKDF2(this.encryptSecretKey, salt, {
      keySize: keySize / 32,
      iterations: 100,
    });

    var iv = CryptoJS.lib.WordArray.random(128 / 8);

    var encrypted = CryptoJS.AES.encrypt(msg, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    });

    var result = CryptoJS.enc.Base64.stringify(
      salt.concat(iv).concat(encrypted.ciphertext)
    );

    return result;
  }

  async showLoader() {
    this.isShowingLoader = true;
    return await this.loadingCtrl
      .create({
        message: "<img src='../assets/images/loader.gif' alt='loader'>",
        spinner: null,
        showBackdrop: false,
        mode: 'md',
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isShowingLoader) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }

  async hideLoader() {
    this.isShowingLoader = false;

    return await this.loadingCtrl
      .dismiss()
      .then(() => {})
      .catch((e) => console.log('Error while dismiss', e));
  }

  dropChequeLocations(obj) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .post(environment.serverUrl + 'Payment/postchequedropdetail', obj)
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }
  getPaymentData() {
    let promise = new Promise((resolve, reject) => {
      let obj = { vcCustomerID: this.encryptData(this.customerId) };
      this._http
        .post(environment.serverUrl + 'Payment/customerpaymentdetail', obj)
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }

  async checkInternetConnection() {
    this.network = await Network.getStatus();
    if (this.network) {
      var connected = this.network.connected;
      if (!connected) {
        this.route.navigate(['/network-check']);
      }
    }
  }
  decrypt(key, ciphertextB64) {
    var key = CryptoJS.enc.Utf8.parse(key);
    var iv = CryptoJS.lib.WordArray.create([0x00, 0x00, 0x00, 0x00]);

    var decrypted = CryptoJS.AES.decrypt(ciphertextB64, key, { iv: iv });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  async universalAlert(title: string, message: string, text: string) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: [
        {
          text: text,
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    alert.present();
  }

  getCustomerId(obj) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .post(this.urls + 'account/GetCustomerID', obj)
        .toPromise()
        .then((response) => {
          resolve(response);
        })
        .catch((response) => {
          reject(response);
        });
    });
    return promise;
  }

  async getNetworkCarrierInfo(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      if (this.network.connectionType != 'none') {
        resolve(this.getIPAddress());
      } else {
        resolve('');
      }
    });
    return promise;
  }

  getIPAddress() {
    this._http.get(GET_IP_API_URL).subscribe(
      (response: any) => {
        this.deviceIP = response.query;
      },
      (err) => {
        this.deviceIP = '127.0.0.1';
      }
    );
  }

  validateOtp(obj) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .post(this.urls + 'account/validateotp', JSON.stringify(obj))
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }

  async checkAccessPin(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.storage.get('AccessPin').then((val) => {
        resolve(val);
      });
    });
    return promise;
  }

  //A/c verified alert
  async AcVerifiedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'ACCOUNT VERIFIED',
      cssClass: 'ac-verify normal',
    });
    alert.present();
  }

  //add project to list, which is used in side menu and acc. to selected slider(project) api calls are done
  addCustomerProjectList(serverObj) {
    if (serverObj.vcProjectName == null) {
      serverObj.vcProjectName = '____';
    }

    if (serverObj.vcImageUrl == null) {
      serverObj.vcImageUrl = './assets/imgs/default-fallback-image_2.png';
    }

    var obj = {
      customerProjectId: parseInt(serverObj.vcCustomerCode, 10),
      customerName: serverObj.vcCustomerName,
      projectName: serverObj.vcProjectName,
      projectImage: serverObj.vcImageUrl,
    };
    this.projectList.push(obj);
    this.storage.set('ProjectList', this.projectList);
  }

  //raise an issue alert during login
  issue() {
    const confirm = this.alertCtrl.create({
      header: 'NOT YOU?',
      cssClass: 'vertical-bottom',
      message:
        'There could be a typing error at your end, please try again. If you still face an issue kindly raise an issue and we will do the rest.',
      buttons: [
        // {
        //     text: "RAISE AN ISSUE",
        //     handler: () => {
        //         this.appCtrl.getRootNavs()[1].push("ReportLoginIssuePage");
        //     }
        // },
        // {
        //     text: "TRY AGAIN",
        //     handler: () => {
        //         this.appCtrl.getRootNavs()[1].setRoot("CustIdPage");
        //     }
        // }
      ],
    });
  }

  onKeyEvent(event: any, compoid, previd) {
    if (event.key == 'Backspace') {
      setTimeout(() => {
        previd.setFocus();
      }, 100);
    } else if (event.key !== 'Backspace' && event.target.value) {
      setTimeout(() => {
        compoid.setFocus();
      }, 100);
    }
  }

  async getUserfeedback() {
    let promise = new Promise((resolve, reject) => {
      var x = Math.floor(Math.random() * 100 + 1);
      resolve(x);
    });
    return promise;
  }

  async showThankyouModal() {
    const modal = this.modalCtrl.create({
      component: ThankYouModalComponent,
    });
    return (await modal).present();
  }
  async showaddedProjectModal(data) {
    const modal = this.modalCtrl.create({
      component: AddedProjectSuccessComponent,
      componentProps: { values: data },
    });
    return (await modal).present();
  }
  // async showThanksModal(){
  //   const modal = this.modalCtrl.create({
  //     component: ThankYouModalComponent
  //   });
  //   return (await modal).present();
  // }
  async showPreviewImageModal(props) {
    const modal = this.modalCtrl.create({
      component: AssetsPreviewComponent,
      componentProps: props,
    });
    return (await modal).present();
  }

  async showPaymentResponseModal(data) {
    const modal = this.modalCtrl.create({
      component: PaymentGatewayResponseComponent,
      componentProps: data,
    });
    return (await modal).present();
  }

  getNotificationCount() {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(this.urls + 'v1/config/getnotificationcount/' + this.customerId)
        .toPromise()
        .then((response) => {
          resolve(response);
        });
    });
    return promise;
  }

  makePayment(outstandingAmount: number) {
    let promise = new Promise((resolve, reject) => {
      this._http
        .get(this.urls + 'Payment/getpaymentdetail/' + this.customerId)
        .toPromise()
        .then((response: any) => {
          if (response.btIsSuccess) {
            // alert("Make payment line 812: "+ JSON.stringify(response.object))
            let obj = response.object;
            //set razoppay auth
            this.razorPayAuth.vcKeyId = obj.vcKeyID;
            this.razorPayAuth.vcKeySecret = obj.vcKeySecret;

            this.generateRazorPayOrderId(obj.vcSaleOrderNo, outstandingAmount);
          }

          resolve(response);
        });
    });
    return promise;
  }

  generateRazorPayOrderId(saleOrderNo: string, outstandingPaymentAmt: number) {
    let userNamePwd =
      this.razorPayAuth.vcKeyId + ':' + this.razorPayAuth.vcKeySecret;
      

    let obj = {
      amount: (outstandingPaymentAmt * 100),
      currency: 'INR',
      receipt: saleOrderNo,
    };

    let headers = {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(userNamePwd),
    };


    this._httpnative
      .post('https://api.razorpay.com/v1/orders', obj, headers)
      .then((datasuccess) => {

        try {
          datasuccess.data = JSON.parse(datasuccess.data);
          if (datasuccess.data.id != null){
            this.postPaymentDetails(datasuccess.data.id, outstandingPaymentAmt);
          }
        } catch (e) {
          // alert(JSON.parse("JSON parsing error"));
          console.error('JSON parsing error');
        }
      })
      .catch((dataerror) => {
        if (dataerror.error) {
          console.log("Error catched >>>>>", dataerror.error);
          // alert(JSON.parse(dataerror.error).error.description);
          // alert(JSON.parse(dataerror));
          alert(JSON.stringify(dataerror.error))
        }
      });
  }

  postPaymentDetails(razorPayOrderId: string, outstandingPaymentAmt: number) {
    let obj = {
      vcCustomerID: this.customerId,
      totalpayamount: outstandingPaymentAmt,
      orderid: razorPayOrderId,
    };

    this._http
      .post(this.urls + 'Payment/PostPaymentdetail', obj)
      .toPromise()
      .then((response: any) => {

        if (response.btIsSuccess) {
          let obj = response.object;
          //set razoppay auth
          this.razorPayAuth.vcKeyId = obj.vcKeyID;
          this.razorPayAuth.vcKeySecret = obj.vcKeySecret;
          let vcProjectDescription = obj.vcProjectName + '-' + obj.vcUnitNo; //vcTransactionNo
          let prefill = {
            name: obj.vcCustomerName,
            email: obj.vcEmailId,
            contact: obj.vcContactNo,
          };
          this.payWithRazorpay(
            razorPayOrderId,
            obj.vcKeyID,
            outstandingPaymentAmt,
            obj.vcCustomerName,
            vcProjectDescription,
            prefill,
            obj.vcTransactionNo
          );
        }
      })
      .catch((e) => {
        console.log('Error >>>> ', e);
      });
  }

  async payWithRazorpay(
    orderId: string,
    vcKeyId: string,
    amount: number,
    customerName: string,
    projectDesc: string,
    prefill: any,
    vcTransactionNo: string
  ) {
    var options;


    options = {
      description: projectDesc,
      order_id: orderId,
      currency: 'INR', // your 3 letter currency code
      key: vcKeyId, // your Key Id from Razorpay dashboard
      amount: amount * 100, // Payment amount in smallest denomiation e.g. cents for USD *100
      name: customerName, //customer name
      theme: {
        color: '#840c6f',
      },
      prefill: prefill,
      notes: vcTransactionNo,
      // modal: {
      //   ondismiss: function () {
      //     localStorage.setItem('RAZORPAY_dismiss', 'Y');
      //   },
      // },
    };

    try {
      let data : any = (await Checkout.open(options));
      if (data.response.hasOwnProperty('razorpay_signature')) {

          this.paymentSuccessfull(data.response);
        } else {

          this.paymentFailed(data.response);
        }
    } catch (error) {
        alert(JSON.parse(error.code).error.description);
    }

    // await Checkout.open(options)
    //   .then((response: any) => {
    //     console.log("Succes open modal>>>>>>>")
    //     if (response.response.hasOwnProperty('razorpay_signature')) {
    //     console.log("if open modal>>>>>>>")

    //       this.paymentSuccessfull(response.response);
    //     } else {
    //     console.log("else open modal>>>>>>>")

    //       this.paymentFailed(response.response);
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("Error open modal>>>>>>>", e)

    //     alert(JSON.parse(e.code).description);
    //   });
  }

  paymentSuccessfull(payObj: IRazorPaySuccess) {
    this._http
      .post(this.urls + 'Payment/Razorpayreturn', payObj)
      .subscribe((response: any) => {
        this.showPaymentResponseModal(response);
      });
  }

  paymentFailed(transactionId: string) {
    let obj = {
      razorpay_payment_id: '',
      razorpay_signature: '',
      razorpay_order_id: '',
      errormetadata: 'Payment Failed',
      errordescription: 'Payment Failed',
      errorreason: 'Payment Failed',
    };

    this._http
      .post(this.urls + 'Payment/Razorpayreturn', obj)
      .subscribe((response: any) => {
        let staticResponse = this.razorPayErrorData(transactionId); //using this bcoz API response is not proper
        this.showPaymentResponseModal(staticResponse);
      });
  }

  razorPayErrorData(transactionId: string) {
    let response = {
      vcDescription: 'Payment verification failed',
      btIsSuccess: false,
      object: '',
      vcTitle: null,
    };

    response['object'] =
      'Payment verification failed. <br /><br />Transaction Number: ' +
      transactionId +
      ' <br /><br />We are temporary unable to process your transaction, Please contact your bank/payment service provider in case the amount has been deducted from your account. In case of the failure at our end the amount will be credited bank to the source of payment in the next 10 days.<br /><br />';

    return response;
  }
  
}
