import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public globalService: GlobalService, public router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !request.url.includes('getnotificationcount') &&
      request.url.includes(`${environment.serverUrl}`)
    ) {
      //hide loader for notification api
      this.globalService.showLoader();
    }

    let changedRequest = request;
    const headerSettings: { [name: string]: string | string[] } = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }

    let userNamePwd;

    if (request.url.includes('razorpay')) {
      userNamePwd =
        this.globalService.razorPayAuth.vcKeyId +
        ':' +
        this.globalService.razorPayAuth.vcKeySecret;
    } else {
      userNamePwd =
        this.globalService.commonheaderObj.userName +
        ':' +
        this.globalService.commonheaderObj.password;
    }

    headerSettings['Authorization'] = 'Basic ' + btoa(userNamePwd);
    if (
      request.url.includes('postuploaddocumentapp') ||
      request.url.includes('/Uploads/Document')
    ) {
    } else {
      headerSettings['Content-Type'] = 'application/json';
    }

    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader,
    });

    return next.handle(changedRequest).pipe(
      catchError((error: any) => {
        if (
          error.status == 401 ||
          error.status == 500 ||
          error.status == 400 ||
          error.status == 404 ||
          error.status == 0
        ) {
          this.globalService.hideLoader();
          this.router.navigate(['error']);
        } else {
          // this.router.navigate(['error']);
          this.globalService
            .checkInternetConnection()
            .then((val) => {
              this.globalService.hideLoader();
            })
            .catch((e) => {
              console.log(e);
            });
        }

        return of(error);
      }),
      finalize(() => {
        this.globalService.hideLoader();
      })
    );
  }
}
