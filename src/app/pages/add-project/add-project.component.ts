import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  typedText: string = '';
  encryptSecretKey = this.globalService.encryptSecretKey;
  validateCustData: any;

  constructor(public globalService: GlobalService, public router: Router) {}

  ngOnInit() {}
  inputBtn() {
    let addedProj = this.globalService.projectList;
    for (let i = 0; i < addedProj.length; i++) {
      if (addedProj[i].customerProjectId == parseInt(this.typedText)) {
        this.globalService.universalAlert(
          'Project already present',
          'Looks like this project is already added. Try using someother customer id.',
          'Ok'
        );
        this.typedText = '';
        return;
      }
    }

    this.globalService
      .validateCustomerLogic(Number(this.typedText))
      .then((response: any) => {
        if (response.btIsSuccess) {
          var decryptedContactNo = this.globalService.decrypt(
            this.encryptSecretKey,
            response.object.vcContactNo
          );
          var decryptedEmail = this.globalService.decrypt(
            this.encryptSecretKey,
            response.object.vcEmail
          );
          var decryptedName = this.globalService.decrypt(
            this.encryptSecretKey,
            response.object.vcName
          );

          this.validateCustData = {
            vcContactNo: decryptedContactNo,
            vcEmail: decryptedEmail,
            vcName: decryptedName,
          };
          response['object']['otp'] = response.vcTitle;
          this.globalService.logCustomerDetail = this.validateCustData;

          this.router.navigate(['/otp']);
          // this.navCtrl.push("ValidateCustIdPage", { "serverResponse": response.object });
        } else {
          this.globalService.universalAlert('', response.statusMessage, 'Ok');
        }
        this.typedText = '';
      })
      .catch((response: any) => {});
  }
}
