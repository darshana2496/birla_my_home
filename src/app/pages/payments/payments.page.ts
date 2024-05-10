import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import {
  IPaymentFutureData,
  IPaymentInterestData,
  IPaymentPendingData,
} from 'src/app/utilities/constants/commonInterface';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  public static pageName = 'PaymentsPage';
  CustomerSegment: string = 'next';
  serverError: boolean = false;

  pendingData: IPaymentPendingData = {
    vcTotalinvoiceraised: '0',
    vcTotalinvoiceraisedconverted: '0',
    vcTotaloutstanding: '0',
    vcTotaloutstandingconverted: '0',
    vcTotalreceived: '0',
    vcTotalreceivedconverted: '0',
    paymentVideoLink: ""
  };
  
  interestData: IPaymentInterestData = {
    vcIntrestAmount: '0',
    vcIntrestAmountBalence: '0',
    vcIntrestAmountBalenceconverted: '0',
    vcIntrestAmountPaid: '0',
    vcIntrestAmountPaidconverted: '0',
    vcIntrestAmountconverted: '0'
  };
  futureData: IPaymentFutureData = {
    intTotalpendinginstallment: '0',
    vcTotalamountpayable: '0',
    vcTotalamountpayableconverted: '0',
    customerPortal_SubFuturePaymentModelList: [],
  };
  pastData: any = [];

  checkDrop: any = {
    buttonName: 'CHEQUE DROP LOCATIONS',
    type: 'cheque',
  };

  payOnline: any = {
    buttonName: 'PAY ONLINE',
    type: 'online',
  };

  addDropLocation: any = {
    buttonName: 'CHEQUE ALREADY DROPPED ?',
    type: 'online',
  };

  noPendingData: any = {
    vcTotalinvoiceraised: '0',
    vcTotalinvoiceraisedconverted: '0',
    vcTotaloutstanding: '0',
    vcTotaloutstandingconverted: '0',
    vcTotalreceived: '0',
    vcTotalreceivedconverted: '0',
    paymentVideoLink: ""
  };
 
  noInterestData: any = {
    vcIntrestAmount: '0',
    vcIntrestAmountBalence: '0',
    vcIntrestAmountBalenceconverted: '0',
    vcIntrestAmountPaid: '0',
    vcIntrestAmountPaidconverted: '0',
    vcIntrestAmountconverted: '0'
  };
  noFutureData: any = {
    intTotalpendinginstallment: '0',
    vcTotalamountpayable: '0',
    vcTotalamountpayableconverted: '0',
    customerPortal_SubFuturePaymentModelList: [],
  };

  MakePaymentsPage: any = {
    outstandingPayment: 0,
  };

  noPastData: any = [];
  vcOptIn: any;
  vcOptOut: any;
  disableBtn: boolean;
  constructor(
    public globalService: GlobalService,
    public route: Router,
    public socialShare: SocialSharing
  ) {}

  ngOnInit() {
    this.getPaymentDetails();
    this.pageReload();
  }

  getPaymentDetails() {
    this.globalService
      .getPaymentData()
      .then((response: any) => {
        if (response.btIsSuccess) {
          let data = response.object;

          this.vcOptIn = data.vcOptIn;
          this.vcOptOut = data.vcOptOut;

          data.objCustomerPortal_PendingPaymentModel.vcTotalinvoiceraised =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.objCustomerPortal_PendingPaymentModel.vcTotalinvoiceraised
            );
          data.objCustomerPortal_PendingPaymentModel.vcTotalinvoiceraisedconverted =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.objCustomerPortal_PendingPaymentModel
                .vcTotalinvoiceraisedconverted
            );
          data.objCustomerPortal_PendingPaymentModel.vcTotalreceived =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.objCustomerPortal_PendingPaymentModel.vcTotalreceived
            );
          data.objCustomerPortal_PendingPaymentModel.vcTotalreceivedconverted =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.objCustomerPortal_PendingPaymentModel
                .vcTotalreceivedconverted
            );
          data.objCustomerPortal_PendingPaymentModel.vcTotaloutstanding =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.objCustomerPortal_PendingPaymentModel.vcTotaloutstanding
            );
          data.objCustomerPortal_PendingPaymentModel.vcTotaloutstandingconverted =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.objCustomerPortal_PendingPaymentModel
                .vcTotaloutstandingconverted
            );
          
          data.objCustomerPortal_PendingPaymentModel.paymentVideoLink =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.objCustomerPortal_PendingPaymentModel
                .paymentVideoLink
            );

          console.log("Pending data", data.objCustomerPortal_PendingPaymentModel);
          
          if (data.objCustomerPortal_PendingPaymentModel == null) {
            console.log("null data", data.objCustomerPortal_PendingPaymentModel)
            this.pendingData = this.noPendingData;
          } else {
            console.log("this.pendingData", this.pendingData)
            this.pendingData = data.objCustomerPortal_PendingPaymentModel;
            this.MakePaymentsPage.outstandingPayment =
              this.pendingData.vcTotaloutstanding;
            if (
              this.MakePaymentsPage.outstandingPayment &&
              this.MakePaymentsPage.outstandingPayment != null &&
              this.MakePaymentsPage.outstandingPayment != 'N/A' &&
              this.MakePaymentsPage.outstandingPayment != 'NIL'
            ) {
              this.disableBtn = true;
            } else {
              this.disableBtn = false;
            }
          }

            // Interest 
            if(data.customerPortal_IntrestPaymentModel){

              data.customerPortal_IntrestPaymentModel.vcIntrestAmount =
                this.globalService.decrypt(
                  this.globalService.encryptSecretKey,
                  data.customerPortal_IntrestPaymentModel.vcIntrestAmount
                );
              data.customerPortal_IntrestPaymentModel.vcIntrestAmountconverted =
                this.globalService.decrypt(
                  this.globalService.encryptSecretKey,
                  data.customerPortal_IntrestPaymentModel
                    .vcIntrestAmountconverted
                );
              data.customerPortal_IntrestPaymentModel.vcIntrestAmountPaid =
                this.globalService.decrypt(
                  this.globalService.encryptSecretKey,
                  data.customerPortal_IntrestPaymentModel.vcIntrestAmountPaid
                );
              data.customerPortal_IntrestPaymentModel.vcIntrestAmountPaidconverted =
                this.globalService.decrypt(
                  this.globalService.encryptSecretKey,
                  data.customerPortal_IntrestPaymentModel
                    .vcIntrestAmountPaidconverted
                );
              data.customerPortal_IntrestPaymentModel.vcIntrestAmountBalence =
                this.globalService.decrypt(
                  this.globalService.encryptSecretKey,
                  data.customerPortal_IntrestPaymentModel.vcIntrestAmountBalence
                );
              data.customerPortal_IntrestPaymentModel.vcIntrestAmountBalenceconverted =
                this.globalService.decrypt(
                  this.globalService.encryptSecretKey,
                  data.customerPortal_IntrestPaymentModel
                    .vcIntrestAmountBalenceconverted
                );
            }
          
            
          if (data.customerPortal_IntrestPaymentModel == null) {
            this.interestData = this.noInterestData;
          } else {
            this.interestData = data.customerPortal_IntrestPaymentModel;
          }

          data.customerPortal_FuturePaymentModel.vcTotalamountpayable =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.customerPortal_FuturePaymentModel.vcTotalamountpayable
            );
          data.customerPortal_FuturePaymentModel.vcTotalamountpayableconverted =
            this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.customerPortal_FuturePaymentModel
                .vcTotalamountpayableconverted
            );

          data.customerPortal_FuturePaymentModel.customerPortal_SubFuturePaymentModelList.forEach(
            (element, index) => {
              data.customerPortal_FuturePaymentModel.customerPortal_SubFuturePaymentModelList[
                index
              ].vcPaymentpercent = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcPaymentpercent
              );
              data.customerPortal_FuturePaymentModel.customerPortal_SubFuturePaymentModelList[
                index
              ].vcAmountpayable = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcAmountpayable
              );
              data.customerPortal_FuturePaymentModel.customerPortal_SubFuturePaymentModelList[
                index
              ].vcaAmountpayableconverted = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcaAmountpayableconverted
              );
              data.customerPortal_FuturePaymentModel.customerPortal_SubFuturePaymentModelList[
                index
              ].vcDescription = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcDescription
              );
            }
          );

          if (data.customerPortal_FuturePaymentModel == null) {
            this.futureData = this.noFutureData;
          } else {
            data.customerPortal_FuturePaymentModel.customerPortal_SubFuturePaymentModelList.map(
              (obj) => {
                if (
                  obj.vcAmountpayable != null ||
                  obj.vcAmountpayable != undefined
                ) {
                  if (typeof obj.vcAmountpayable == 'string')
                    obj.vcAmountpayable = Math.round(
                      Number(obj.vcAmountpayable)
                    ).toString();
                }
              }
            );
            this.futureData = data.customerPortal_FuturePaymentModel;
          }


          data.customerPortal_PastPaymentModelList.forEach((element, index) => {
            data.customerPortal_PastPaymentModelList[index].vcPaymentDate =
              this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcPaymentDate
              );
            data.customerPortal_PastPaymentModelList[index].vcAmountpaid =
              this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcAmountpaid
              );
            data.customerPortal_PastPaymentModelList[index].vcPaymentMode =
              this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcPaymentMode
              );
            data.customerPortal_PastPaymentModelList[index].vcPaymentTowards =
              this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcPaymentTowards
              );
            data.customerPortal_PastPaymentModelList[index].vcChequeDetail =
              this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                element.vcChequeDetail
              );
          });

          

        
          if (data.customerPortal_PastPaymentModelList == null) {
            this.pastData = this.noPastData;
          } else {
            data.customerPortal_PastPaymentModelList.map((obj) => {
              if (obj.vcAmountpaid != null || obj.vcAmountpaid != undefined) {
                if (typeof obj.vcAmountpaid == 'string')
                  obj.vcAmountpaid = Math.round(
                    Number(obj.vcAmountpaid)
                  ).toString();
              }
            });
            this.pastData = data.customerPortal_PastPaymentModelList;
          }

        } else {
          this.serverError = true;
        }
      })
      .catch((response: any) => {});
  }

  pageReload() {
    this.globalService.eventsample.subscribe((x) => {
      console.log(x);
      if (x) {
        this.getPaymentDetails();
      }
    });
  }

  shareFile(obj) {
    let data =
      'Amount of Rs ' +
      obj.vcAmountpaid +
      ' paid towards ' +
      obj.vcPaymentTowards +
      ' on ' +
      obj.vcPaymentDate +
      ' via ' +
      obj.vcPaymentMode +
      '. Payment details: ' +
      obj.vcChequeDetail +
      '. Bank details: ' +
      obj.vcBankDetail;
    console.log(data);
    // let obj =
    // {
    //   "vcPaymentDate": "01 Jan 2019",
    //   "vcAmountpaid": "500000",
    //   "vcPaymentMode": "20190117",
    //   "vcBankDetail": null,
    //   "vcPaymentTowards": "Installment Amount",
    //   "vcChequeDetail": "1234"
    // }
    this.socialShare
      .share(data, null, null, null)
      .then((response: any) => {
        console.log('share data', response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  dropCheque() {
    this.route.navigate(['/cheque-drop']);
  }
  makePayment() {
    if (this.MakePaymentsPage.outstandingPayment > 0) {
      this.route.navigate([
        '/make-payment',
        this.MakePaymentsPage.outstandingPayment,
      ]);
    }
  }
  chequeDetailpage() {
    this.route.navigate(['/cheque-detail-drop']);
  }

  async openUrl(link: any) {
    if (Browser) {
    await Browser.open({url : link});
    } else {
      alert("Not ready")
    }
  }

}
