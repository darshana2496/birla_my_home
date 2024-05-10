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

    console.log("encryptedCustId", encryptedCustId);

    this.globalService.vaultBirlaUploads(obj).then((response: any) => {
      let decrypted = this.globalService.decrypt(this.globalService.encryptSecretKey, obj.vcCustomerID)
      console.log("decrypted val", decrypted)
        if (
          response.btIsSuccess &&
          response.object 
        ) {

          this.adminUploadedDocs = response.object.subPkgDocumentList.length > 0 ? response.object.subPkgDocumentList : [];
          this.adminHandoverDocs = response.object.subPkgHandoverDocumentList.length > 0 ? response.object.subPkgHandoverDocumentList: [];
          this.adminMiscellaneousDocs = response.object.subPkgMiscDocumentList.length > 0 ? response.object.subPkgMiscDocumentList: [];

          if(this.adminUploadedDocs.length > 0) {
            this.adminUploadedDocs.map((item)=> {
              item.vcType = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                item.vcType
              );

              console.log("Decrypted vctype", this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                item.vcType
              ))
              item.vcFilename = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                item.vcFilename
              );
              item.vcFileUrl = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                item.vcFileUrl
              );
  
            })

            this.adminUploadedDocs = this.groupBy(this.adminUploadedDocs, 'vcType');
          }

          if(this.adminHandoverDocs.length > 0){
            this.adminHandoverDocs.map((item)=> {
              item.vcType = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
               item.vcType
              );
              item.vcFilename = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
               item.vcFilename
              );
              item.vcFileUrl = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
               item.vcFileUrl
              );
            })
          }
         

          if(this.adminMiscellaneousDocs.length > 0){
            // Miscellaneous docs decryption
            this.adminMiscellaneousDocs.map((item)=> {
              item.vcType = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                item.vcType
              );
              item.vcFilename = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                item.vcFilename
              );
              item.vcFileUrl = this.globalService.decrypt(
                this.globalService.encryptSecretKey,
                item.vcFileUrl
              );
            })
          }
        } else {
          this.adminUploadedDocs = [];
          this.adminHandoverDocs = [];
          this.adminMiscellaneousDocs = [];
        }
      })
      .catch((response: any) => {});
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
