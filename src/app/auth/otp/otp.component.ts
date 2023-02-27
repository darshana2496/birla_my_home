import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { map, Observable, Subject, takeUntil, timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  enableResendOtpOption: boolean = true;

  interval: number = 1000;
  duration: number = 60;
  minutes: number = 4;
  displaySec: any = '0';
  displayMin: any = '0';
  stopTimer: Subject<boolean> = new Subject<boolean>();

  userDetails: any;
  cheatCode: boolean = false;
  cheatOtp: any;

  otpFormGroup: FormGroup;
  deviceId: string;

  constructor(
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    public globalService: GlobalService,
    public fb: FormBuilder,
    public storage: Storage,
    public router: Router,
    public device: Device
  ) {
    this.otpFormGroup = this.fb.group({
      otp: new FormControl('', [Validators.required]),
    });
    this.userDetails = this.globalService.logCustomerDetail;
    // alert(JSON.stringify(this.userDetails));
    if (this.userDetails && this.userDetails.vcEmail.includes('~')) {
      let email = this.userDetails.vcEmail;
      this.userDetails.vcEmail = email.slice(0, email.lastIndexOf('~'));
    }

    this.deviceId = this.device.uuid;
  }

  ngOnInit() {}

  ngOndestroy() {
    this.stopTimer.next(true);
    this.enableResendOtpOption = true;
  }

  showResendOtpOption() {
    if (this.displaySec === ' ') {
      this.enableResendOtpOption = true;
    }

    if (this.otpFormGroup.valid) {
      let custObj = {
        vcCustomerID: this.globalService.encryptedCustId,
        vcIp: this.globalService.deviceIP,
        // "vcIp": "192.168.1.100",
        vcDeviceID: this.globalService.onesignalPlayerId,
        vcOtp: this.otpFormGroup.value.otp.toString(),
      };
      this.globalService
        .validateOtp(custObj)
        .then((data: any) => {
          if (data.btIsSuccess) {
            let obj = data.object;

            obj.vcCustomerCode = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.object.vcCustomerCode
            );
            obj.vcProjectCode = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.object.vcProjectCode
            );
            obj.vcProjectName = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.object.vcProjectName
            );
            obj.vcCustomerName = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.object.vcCustomerName
            );
            obj.vcContactNo = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.object.vcContactNo
            );
            obj.vcEmailId = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.object.vcEmailId
            );
            obj.vcImageUrl = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              data.object.vcImageUrl
            );

            this.storage.set('ProjectCustomerName', obj.vcCustomerName);
            this.storage.set('ProjectCustomerId', obj.vcCustomerCode);

            this.globalService
              .checkAccessPin()
              .then((response: any) => {
                if (response != null) {
                  //when user is logged in
                  // this.navCtrl.push("ModalProjectAddSuccessPage", { 'projectObj': obj })
                  // call modal of project added successfully

                  this.globalService.showaddedProjectModal(obj);
                  this.router.navigate(['/enter-pin']);
                  // this.router.navigate(['/add-project']);
                } else {
                  this.globalService.AcVerifiedAlert();
                  // this.navCtrl.push("SetPinPage");
                  this.router.navigate(['/set-pin']);
                }
              })
              .catch((response: any) => {});
              console.log(obj,'userdetail')
            this.globalService.customerId = obj.vcCustomerCode;
            this.globalService.addCustomerProjectList(obj);
          } else {
            this.globalService.issue();
          }
        })
        .catch((data: any) => {});
    }
  }

  resendOtpTimer() {
    var timeStream = timer(0, this.interval).pipe(
      takeUntil(this.stopTimer),
      map((value) => --this.duration)
    );

    timeStream.subscribe((value) => {
      if (value == -1) {
        this.stopTimer.next(true);
        this.minutes--;
        this.duration = 60;
        if (this.minutes != -1) {
          this.resendOtpTimer();
        }
      } else {
        this.displaySec = value;
        if (this.displaySec < 10) {
          this.displaySec = '0' + this.displaySec;
        }
        this.displayMin = '0' + this.minutes;
        if (this.displayMin == '00' && this.displaySec == '00') {
          this.enableResendOtpOption = true;
        }
      }
    });
  }

  resendOtpCounter() {
    this.enableResendOtpOption = false;
    this.minutes = 4;
    this.resendOtpTimer();
  }
}
