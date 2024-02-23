import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { IonItemSliding } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import {
  ITdsDocuments,
  IVaultDocumentType,
} from 'src/app/utilities/constants/commonInterface';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-vault',
  templateUrl: 'vault.page.html',
  styleUrls: ['vault.page.scss'],
})
export class VaultPage implements OnInit {
  CustomerSegment: string = 'documents';
  customTabs: string;
  disableBtn: boolean = true;
  isSwiperOpen: boolean = false;
  max = 100;
  current = 100;
  myUploadSearch: string;
  searchText: string = '';
  searchHandoverText: string = '';
  searchMiscellaneousText: string = '';
  activeItemSliding: IonItemSliding = null;
  isSlideOpen: Boolean = false;
  adminUploadedDocs: ITdsDocuments[] = [];
  userUploadedDocs: ITdsDocuments[] = [];
  staticVaultList: IVaultDocumentType[] = [
    { name: 'Demand Letters', count: 0, documentList: '' },
    { name: 'Payment Receipts', count: 0, documentList: '' },
    { name: 'Other Property Letters', count: 0, documentList: '' },
  ];
  adminHandoverDocs: any;
  adminMiscellaneousDocs: any;
  constructor(
    public globalService: GlobalService,
    public route: Router,
    public http: HttpClient,
    public socialShare: SocialSharing
  ) {}
  ngOnInit(): void {
    this.vaultBirlaUploads();
    this.activeItemSliding = null;
    this.isSlideOpen = false;
    this.resetListCount();
    this.pageReload();
  }

  pageReload() {
    this.globalService.eventsample.subscribe((x) => {
      console.log(x);
      if (x) {
        this.vaultBirlaUploads();
      }
    });
  }

  vaultBirlaUploads() {

    let encryptedCustId = this.globalService.encryptData(
      this.globalService.customerId
    );
    let obj = {
      vcCustomerID: encryptedCustId,
      vcType: '',
      vcStartDate: '',
      vcEndDate: '',
    };

    this.globalService.vaultBirlaUploads(obj).then((response: any) => {
        if (
          response.btIsSuccess &&
          response.object 
          // response.object.subPkgDocumentList &&
          // response.object.subPkgHandoverDocumentList &&
          // response.object.subPkgHandoverDocumentList
        ) {

          this.adminUploadedDocs = response.object.subPkgDocumentList ? response.object.subPkgDocumentList : [];
          this.adminHandoverDocs = response.object.subPkgHandoverDocumentList ? response.object.subPkgHandoverDocumentList: [];
          this.adminMiscellaneousDocs = response.object.subPkgMiscDocumentList ? response.object.subPkgMiscDocumentList: [];

          //if (this.globalService.tdsFilterObject.documentType == "") {
          for (let i = 0; i < response.object.subPkgDocumentList.length; i++) {
            let decryptVcType = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgDocumentList[i].vcType
            );
            let decryptvcFilename = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgDocumentList[i].vcFilename
            );
            let decryptvcFileURL = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgDocumentList[i].vcFileUrl
            );

            response.object.subPkgDocumentList[i].vcType = decryptVcType;
            response.object.subPkgDocumentList[i].vcFilename =
              decryptvcFilename;
            response.object.subPkgDocumentList[i].vcFileUrl = decryptvcFileURL;

            let obj = response.object.subPkgDocumentList[i];
            let count = -1;
            for (let j = 0; j < this.staticVaultList.length; j++) {
              const element = this.staticVaultList[j];

              if (element.name == obj.vcType) {
                count = i;
                element.count += 1;
                let newObj = obj.vcFilename + ' ';
                element.documentList += element.documentList + newObj;
              }
            }
            if (count == -1) {
              //new type other then the three static onces
              let newObj = obj.vcFilename;
              let newStaticVal = {
                name: obj.vcType,
                count: 1,
                documentList: newObj,
              };
              this.staticVaultList.push(newStaticVal);
            }
            
            
          }
          let groupedArray = this.groupBy(response.object.subPkgDocumentList, 'vcType');
          this.adminUploadedDocs = groupedArray
          console.log("***********document filter********", this.adminUploadedDocs)
            

          // handover docs decryption
          for (
            let i = 0;
            i < response.object.subPkgHandoverDocumentList.length;
            i++
          ) {
            let decryptVcType = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgHandoverDocumentList[i].vcType
            );
            let decryptvcFilename = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgHandoverDocumentList[i].vcFilename
            );
            let decryptvcFileURL = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgHandoverDocumentList[i].vcFileUrl
            );

            response.object.subPkgHandoverDocumentList[i].vcType =
              decryptVcType;
            response.object.subPkgHandoverDocumentList[i].vcFilename =
              decryptvcFilename;
            response.object.subPkgHandoverDocumentList[i].vcFileUrl =
              decryptvcFileURL;

            // let obj = response.object.subPkgHandoverDocumentList[i];
            // let count = -1;
            // for (let j = 0; j < this.staticVaultList.length; j++) {
            //   const element = this.staticVaultList[j];

            //   if (element.name == obj.vcType) {
            //     count = i;
            //     element.count += 1;
            //     let newObj = obj.vcFilename + ' ';
            //     element.documentList += element.documentList + newObj;
            //   }
            // }
            // if (count == -1) {
            //   //new type other then the three static onces
            //   let newObj = obj.vcFilename;
            //   let newStaticVal = {
            //     name: obj.vcType,
            //     count: 1,
            //     documentList: newObj,
            //   };
            //   this.staticVaultList.push(newStaticVal);
            // }
          }
         
          // Miscellaneous docs decryption
          for (
            let i = 0;
            i < response.object.subPkgMiscDocumentList.length;
            i++
          ) {
            let decryptVcType = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgMiscDocumentList[i].vcType
            );
            let decryptvcFilename = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgMiscDocumentList[i].vcFilename
            );
            let decryptvcFileURL = this.globalService.decrypt(
              this.globalService.encryptSecretKey,
              response.object.subPkgMiscDocumentList[i].vcFileUrl
            );

            response.object.subPkgMiscDocumentList[i].vcType =
              decryptVcType;
            response.object.subPkgMiscDocumentList[i].vcFilename =
              decryptvcFilename;
            response.object.subPkgMiscDocumentList[i].vcFileUrl =
              decryptvcFileURL;

          }
        } else {
          this.adminUploadedDocs = [];
          this.adminHandoverDocs = [];
          this.adminMiscellaneousDocs = [];
        }
        console.log("Document list", this.adminUploadedDocs)
      })
      .catch((response: any) => {});
  }

  resetListCount() {
    this.staticVaultList = [
      { name: 'Demand Letters', count: 0, documentList: '' },
      { name: 'Payment Receipts', count: 0, documentList: '' },
      { name: 'Other Property Letters', count: 0, documentList: '' },
    ];
  }

  getList(key, arr) {
    return Object.keys(arr)
  }

  groupBy(array, property) {
    return array.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  getKeys(){
    return Object.keys(this.adminUploadedDocs)
  }

  async viewDocs(docsData) {
    if (docsData.vcFileUrl.includes('.pdf')) {
      docsData.fileType = 'pdf';
      let options = 'zoom=no,closebuttoncaption=Close,closebuttoncolor=#000000';
      await Browser.open({ url: docsData.vcFileUrl });
    }

    if (docsData.vcFileUrl.includes('.jpg')) {
      docsData.fileType = 'jpg';
      docsData['isDownloaded'] = false;
      this.route.navigate(['/asset-preview'], docsData);
    }

    if (docsData.vcFileUrl.includes('.png')) {
      docsData.fileType = 'png';
      docsData['isDownloaded'] = false;
      this.route.navigate(['/asset-preview'], docsData);
    }
  }

  async viewHandoverDocs(docsData) {
    console.log('docs', docsData);
    if (docsData.vcFileUrl.includes('.pdf')) {
      let options = 'zoom=no,closebuttoncaption=Close,closebuttoncolor=#000000';
      await Browser.open({ url: docsData.vcFileUrl });
    }
    if (docsData.vcFileUrl.includes('.xls')) {
      let options = 'zoom=no,closebuttoncaption=Close,closebuttoncolor=#000000';
      await Browser.open({ url: docsData.vcFileUrl });
    }
    if (docsData.vcFileUrl.includes('.doc')) {
      let options = 'zoom=no,closebuttoncaption=Close,closebuttoncolor=#000000';
      await Browser.open({ url: docsData.vcFileUrl });
    }

    if (
      docsData.vcFileUrl.includes('.jpg') ||
      docsData.vcFileUrl.includes('.JPG') ||
      docsData.vcFileUrl.includes('.png') ||
      docsData.vcFileUrl.includes('.PNG')
    ) {
      docsData['isDownloaded'] = false;
      this.globalService.previewImage(docsData.vcFileUrl);
    }
  }

  shareDoc(data) {
    this.globalService.showDownloadToast('Please wait..', null, 2000, 'top');
    this.globalService.showLoader();
    let currentFiledata = data;
    this.socialShare
      .share(null, null, currentFiledata.vcFileUrl, null)
      .then((response: any) => {
        this.globalService.hideLoader();
      })
      .catch((error: any) => {});
  }
}
