"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3677],{3677:(fe,v,d)=>{d.r(v),d.d(v,{AuthModule:()=>he});var e=d(6738);let C=(()=>{class i{transform(n){return null==n||" "==n?"xxxx xxxxx":n.replace(n.slice(2,7),"xxx xx")}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275pipe=e.Yjl({name:"encryptNumberPipe",type:i,pure:!0}),i})();var l=d(4881),f=d(6895),p=d(4719),k=d(754),w=d(5529),M=d(6498),O=d(2654);class N extends O.w{constructor(o,n){super()}schedule(o,n=0){return this}}let P=(()=>{class i{constructor(n,t=i.now){this.SchedulerAction=n,this.now=t}schedule(n,t=0,r){return new this.SchedulerAction(this,n).schedule(r,t)}}return i.now=()=>Date.now(),i})();class m extends P{constructor(o,n=P.now){super(o,()=>m.delegate&&m.delegate!==this?m.delegate.now():n()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(o,n=0,t){return m.delegate&&m.delegate!==this?m.delegate.schedule(o,n,t):super.schedule(o,n,t)}flush(o){const{actions:n}=this;if(this.active)return void n.push(o);let t;this.active=!0;do{if(t=o.execute(o.state,o.delay))break}while(o=n.shift());if(this.active=!1,t){for(;o=n.shift();)o.unsubscribe();throw t}}}const U=new m(class K extends N{constructor(o,n){super(o,n),this.scheduler=o,this.work=n,this.pending=!1}schedule(o,n=0){if(this.closed)return this;this.state=o;const t=this.id,r=this.scheduler;return null!=t&&(this.id=this.recycleAsyncId(r,t,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(r,this.id,n),this}requestAsyncId(o,n,t=0){return setInterval(o.flush.bind(o,this),t)}recycleAsyncId(o,n,t=0){if(null!==t&&this.delay===t&&!1===this.pending)return n;clearInterval(n)}execute(o,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(o,n);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,n){let r,t=!1;try{this.work(o)}catch(c){t=!0,r=!!c&&c||new Error(c)}if(t)return this.unsubscribe(),r}_unsubscribe(){const o=this.id,n=this.scheduler,t=n.actions,r=t.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&t.splice(r,1),null!=o&&(this.id=this.recycleAsyncId(n,o,null)),this.delay=null}});var q=d(6688);function T(i){return!(0,q.k)(i)&&i-parseFloat(i)+1>=0}var Z=d(2866);function Y(i){const{index:o,period:n,subscriber:t}=i;if(t.next(o),!t.closed){if(-1===n)return t.complete();i.index=o+1,this.schedule(i,n)}}var _=d(1177);class E{constructor(o){this.notifier=o}call(o,n){const t=new D(o),r=(0,_.ft)(this.notifier,new _.IY(t));return r&&!t.seenValue?(t.add(r),n.subscribe(t)):t}}class D extends _.Ds{constructor(o){super(o),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var j=d(4850),g=d(8694),y=d(9300),b=d(849),I=d(4598),h=d(9734);const F=function(){return["/loginwithcustid"]};function Q(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"h2",6),e._uU(4,"Hello"),e.qZA(),e.TgZ(5,"h3",7),e._uU(6),e.qZA(),e.TgZ(7,"div",8)(8,"ion-button",9),e._uU(9,"NOT YOU ?"),e.qZA()()(),e.TgZ(10,"div",10)(11,"form",11)(12,"span",12),e._uU(13,"OTP sent on "),e.TgZ(14,"span",13),e._uU(15),e.ALo(16,"encryptNumberPipe"),e.qZA(),e._uU(17," and also on "),e.TgZ(18,"span",13),e._uU(19),e.qZA()(),e.TgZ(20,"ion-item",14)(21,"ion-label",15),e._uU(22,"Enter OTP"),e.qZA(),e._UZ(23,"ion-input",16),e.TgZ(24,"ion-button",17),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.showResendOtpOption())}),e._UZ(25,"span",18),e.qZA()()()()()()}if(2&i){const n=e.oxw();e.xp6(6),e.Oqu(n.userDetails.vcName),e.xp6(2),e.Q6J("routerLink",e.DdM(7,F)),e.xp6(3),e.Q6J("formGroup",n.otpFormGroup),e.xp6(4),e.Oqu(e.lcZ(16,5,n.userDetails.vcContactNo)),e.xp6(4),e.Oqu(n.userDetails.vcEmail)}}let H=(()=>{class i{constructor(n,t,r,c,s,u,a){if(this.alertCtrl=n,this.route=t,this.globalService=r,this.fb=c,this.storage=s,this.router=u,this.device=a,this.enableResendOtpOption=!0,this.interval=1e3,this.duration=60,this.minutes=4,this.displaySec="0",this.displayMin="0",this.stopTimer=new w.xQ,this.cheatCode=!1,this.otpFormGroup=this.fb.group({otp:new p.NI("",[p.kI.required])}),this.userDetails=this.globalService.logCustomerDetail,this.userDetails&&this.userDetails.vcEmail.includes("~")){let S=this.userDetails.vcEmail;this.userDetails.vcEmail=S.slice(0,S.lastIndexOf("~"))}this.deviceId=this.device.uuid}ngOnInit(){}ngOndestroy(){this.stopTimer.next(!0),this.enableResendOtpOption=!0}showResendOtpOption(){if(" "===this.displaySec&&(this.enableResendOtpOption=!0),this.otpFormGroup.valid){let n={vcCustomerID:this.globalService.encryptedCustId,vcIp:this.globalService.deviceIP,vcDeviceID:this.globalService.onesignalPlayerId,vcOtp:this.otpFormGroup.value.otp.toString()};this.globalService.validateOtp(n).then(t=>{if(t.btIsSuccess){let r=t.object;r.vcCustomerCode=this.globalService.decrypt(this.globalService.encryptSecretKey,t.object.vcCustomerCode),r.vcProjectCode=this.globalService.decrypt(this.globalService.encryptSecretKey,t.object.vcProjectCode),r.vcProjectName=this.globalService.decrypt(this.globalService.encryptSecretKey,t.object.vcProjectName),r.vcCustomerName=this.globalService.decrypt(this.globalService.encryptSecretKey,t.object.vcCustomerName),r.vcContactNo=this.globalService.decrypt(this.globalService.encryptSecretKey,t.object.vcContactNo),r.vcEmailId=this.globalService.decrypt(this.globalService.encryptSecretKey,t.object.vcEmailId),r.vcImageUrl=this.globalService.decrypt(this.globalService.encryptSecretKey,t.object.vcImageUrl),this.storage.set("ProjectCustomerName",r.vcCustomerName),this.storage.set("ProjectCustomerId",r.vcCustomerCode),this.globalService.checkAccessPin().then(c=>{null!=c?(this.globalService.showaddedProjectModal(r),this.router.navigate(["/enter-pin"])):(this.globalService.AcVerifiedAlert(),this.router.navigate(["/set-pin"]))}).catch(c=>{}),this.globalService.customerId=r.vcCustomerCode,this.globalService.addCustomerProjectList(r)}else this.globalService.issue()}).catch(t=>{})}}resendOtpTimer(){var n=function G(i=0,o,n){let t=-1;return T(o)?t=Number(o)<1?1:Number(o):(0,Z.K)(o)&&(n=o),(0,Z.K)(n)||(n=U),new M.y(r=>{const c=T(i)?i:+i-n.now();return n.schedule(Y,c,{index:0,period:t,subscriber:r})})}(0,this.interval).pipe(function J(i){return o=>o.lift(new E(i))}(this.stopTimer),(0,j.U)(t=>--this.duration));n.subscribe(t=>{-1==t?(this.stopTimer.next(!0),this.minutes--,this.duration=60,-1!=this.minutes&&this.resendOtpTimer()):(this.displaySec=t,this.displaySec<10&&(this.displaySec="0"+this.displaySec),this.displayMin="0"+this.minutes,"00"==this.displayMin&&"00"==this.displaySec&&(this.enableResendOtpOption=!0))})}resendOtpCounter(){this.enableResendOtpOption=!1,this.minutes=4,this.resendOtpTimer()}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(l.Br),e.Y36(g.gz),e.Y36(y.U),e.Y36(p.qu),e.Y36(b.K),e.Y36(g.F0),e.Y36(I.A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-otp"]],decls:3,vars:4,consts:[[1,"typ-transparent",3,"type","typeTitle"],[1,"lyt-section","typ-bg","extra-padding",3,"fullscreen"],["class","otp-page-content",4,"ngIf"],[1,"otp-page-content"],[1,"form-cont","app-form"],[1,"bs-title-desc","ion-text-left"],[1,"title"],[1,"sub-title"],[1,"button-parent"],[1,"app-btn","btn-link","ion-no-padding",3,"routerLink"],[1,"bs-form"],[3,"formGroup"],[1,"field-label"],[1,"cm-bold"],["lines","none",1,"app-form-group"],["position","floating",1,"app-field-label"],["type","number","formControlName","otp","maxlength","6",1,"app-form-control"],[3,"click"],[1,"icons","icon-next"]],template:function(n,t){1&n&&(e._UZ(0,"app-header",0),e.TgZ(1,"ion-content",1),e.YNc(2,Q,26,8,"div",2),e.qZA()),2&n&&(e.Q6J("type","normal")("typeTitle","logo"),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf",t.userDetails))},dependencies:[l.YG,l.W2,l.pK,l.Ie,l.Q$,l.as,l.YI,h.G,f.O5,p._Y,p.JJ,p.JL,p.nD,g.rH,p.sg,p.u,C],styles:[".otp-page-content[_ngcontent-%COMP%]{position:absolute;top:25%;left:0;right:0}.otp-page-content[_ngcontent-%COMP%]   .form-cont[_ngcontent-%COMP%]   .field-label[_ngcontent-%COMP%]{font-size:1.4rem;line-height:2rem;color:#000;font-weight:500;margin-bottom:11px;display:block}"]}),i})(),B=(()=>{class i{constructor(n,t,r,c){this.router=n,this.globalService=t,this.storage=r,this.navCtrl=c,this.encryptSecretKey=this.globalService.encryptSecretKey}ngOnInit(){}inputBtn(){var n;null!=this.typedText&&(n=parseInt(this.typedText,10),this.typedText="",this.globalService.validateCustomerLogic(n).then(t=>{if("Invalid Customer"!=t.statusMessage)var r=this.globalService.decrypt(this.encryptSecretKey,t.object.vcContactNo),c=this.globalService.decrypt(this.encryptSecretKey,t.object.vcEmail),s=this.globalService.decrypt(this.encryptSecretKey,t.object.vcName);this.validateCustData={vcContactNo:r,vcEmail:c,vcName:s},t.btIsSuccess?(t.object.otp=t.vcTitle,this.globalService.logCustomerDetail=this.validateCustData,this.router.navigate(["/otp"])):this.globalService.universalAlert("",t.statusMessage,"Ok")}).catch(t=>{}))}inputChanged(n){}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(g.F0),e.Y36(y.U),e.Y36(b.K),e.Y36(l.SH))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-login-with-cust-id"]],decls:21,vars:4,consts:[[1,"typ-transparent",3,"type","typeTitle"],[1,"lyt-section","typ-bg",3,"fullscreen"],[1,"content-inner","lyt-section","typ-bg"],[1,"content"],[1,"form-cont","app-form"],[1,"bs-title-desc","ion-text-start"],[1,"title"],[1,"sub-title"],[1,""],["lines","none",1,"app-form-group"],["position","floating",1,"app-field-label"],["type","number",1,"app-form-control",3,"ngModel","ngModelChange","ionChange"],[3,"click"],[1,"icons","icon-next"],[1,"get-id-link","ion-text-end"],["routerLink","/know-your-cust-id",2,"font-weight","600"]],template:function(n,t){1&n&&(e._UZ(0,"app-header",0),e.TgZ(1,"ion-content",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2",6),e._uU(7,"Hello"),e.qZA(),e.TgZ(8,"h3",7),e._uU(9,"welcome home"),e.qZA()(),e.TgZ(10,"div",8)(11,"ion-item",9)(12,"ion-label",10),e._uU(13,"CUSTOMER ID"),e.qZA(),e.TgZ(14,"ion-input",11),e.NdJ("ngModelChange",function(c){return t.typedText=c})("ionChange",function(c){return t.inputChanged(c)}),e.qZA(),e.TgZ(15,"ion-button",12),e.NdJ("click",function(){return t.inputBtn()}),e._UZ(16,"span",13),e.qZA()(),e._UZ(17,"br"),e.TgZ(18,"span",14)(19,"a",15),e._uU(20,"Get Customer Id"),e.qZA()()()()()()()),2&n&&(e.Q6J("type","normal")("typeTitle","logo"),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(13),e.Q6J("ngModel",t.typedText))},dependencies:[l.YG,l.W2,l.pK,l.Ie,l.Q$,l.as,l.Fo,h.G,p.JJ,p.On,g.rH],styles:[".get-id-link[_ngcontent-%COMP%]{float:right;text-align:right}.get-id-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:red;font-size:15px}.pad[_ngcontent-%COMP%]{padding:2rem}.content-inner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-cont[_ngcontent-%COMP%]{position:absolute;top:18%;right:0;left:0}"]}),i})(),L=(()=>{class i{constructor(n,t){this.storage=n,this.router=t}ngOnInit(){}gotoCustIdPage(){this.storage.set("FirstTimeAppLoad",!1),this.router.navigate(["/loginwithcustid"])}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(b.K),e.Y36(g.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-landing"]],decls:17,vars:2,consts:[[1,"bs-appIntro","typ-landing"],[1,"app-intro-logo-wrap"],[1,"typ-transparent",3,"type","typeTitle"],[1,"introSlider"],[1,"mod-appintro"],[1,"title"],[1,"cm-bold"],["text-center","",1,"button-parent"],[1,"ion-text-center","ion-align-vertical"],[1,"app-btn","btn-default",3,"click"],[1,"ion-align-vertical","ion-text-center"],[1,"app-btn","btn-link",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-content",0)(1,"ion-header",1),e._UZ(2,"app-header",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4)(5,"h2",5)(6,"span"),e._uU(7,"Ready"),e.qZA(),e.TgZ(8,"span",6),e._uU(9,"set go!"),e.qZA()()()(),e.TgZ(10,"div",7)(11,"div",8)(12,"ion-button",9),e.NdJ("click",function(){return t.gotoCustIdPage()}),e._uU(13,"I am an owner"),e.qZA()(),e.TgZ(14,"div",10)(15,"ion-button",11),e.NdJ("click",function(){return t.gotoCustIdPage()}),e._uU(16,"Continue as guest"),e.qZA()()()()),2&n&&(e.xp6(2),e.Q6J("type","normal")("typeTitle","logo"))},dependencies:[l.YG,l.W2,l.Gu,h.G]}),i})();var R=d(7582);function W(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1,"Enter Pan Number"),e.qZA())}function V(i,o){if(1&i&&(e.TgZ(0,"div",20),e.YNc(1,W,2,0,"p",21),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.panNo.errors.required)}}function z(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1,"Enter Date Of Birth"),e.qZA())}function X(i,o){if(1&i&&(e.TgZ(0,"div",20),e.YNc(1,z,2,0,"p",21),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.f.dob.errors.required)}}function $(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Select Date"),e.qZA(),e.TgZ(4,"ion-buttons",22)(5,"ion-button",23),e.NdJ("click",function(){e.CHM(n),e.oxw();const r=e.MAs(25);return e.KtG(r.dismiss())}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content")(8,"ion-item")(9,"ion-datetime",24),e.NdJ("ionChange",function(r){e.CHM(n);const c=e.oxw();return e.KtG(c.onTermsChanged(r))})("ngModelChange",function(r){e.CHM(n);const c=e.oxw();return e.KtG(c.selectedDate=r)}),e.qZA()()()}if(2&i){const n=e.oxw();e.xp6(9),e.Q6J("ngModel",n.selectedDate)}}function ee(i,o){if(1&i&&(e.TgZ(0,"h2",32),e._uU(1," Your Customer Id is "),e.TgZ(2,"span",33),e._uU(3),e.qZA()()),2&i){const n=e.oxw(2);e.xp6(3),e.hij(" ",n.custIds,"")}}function te(i,o){if(1&i&&(e.TgZ(0,"h2",32),e._uU(1),e.qZA()),2&i){const n=e.oxw(2);e.xp6(1),e.Oqu(n.errorMsg)}}function ne(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"ion-button",34),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.tryAgain())}),e._uU(1,"Try Again"),e.qZA()}}function ie(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"ion-button",34),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.backToLogin())}),e._uU(1,"Back to login"),e.qZA()}}function oe(i,o){if(1&i&&(e.TgZ(0,"div",25)(1,"div",26)(2,"div",27),e.YNc(3,ee,4,1,"h2",28),e.YNc(4,te,2,1,"h2",28),e.qZA(),e.TgZ(5,"div",29)(6,"div",30),e.YNc(7,ne,2,0,"ion-button",31),e.YNc(8,ie,2,0,"ion-button",31),e.qZA()()()()),2&i){const n=e.oxw();e.xp6(3),e.Q6J("ngIf",n.success),e.xp6(1),e.Q6J("ngIf",!n.success),e.xp6(3),e.Q6J("ngIf",!n.success),e.xp6(1),e.Q6J("ngIf",n.success)}}let re=(()=>{class i{constructor(n,t,r,c){this.modalCtrl=n,this.globalService=t,this.router=r,this.fb=c,this.submitted=!1,this.showCustIdModal=!1,this.presentingElement=null,this.errorMsg="",this.canDismiss=!1,this.knowCustIdForm=this.fb.group({dob:new p.NI("",[p.kI.required]),panNo:new p.NI("",[p.kI.required])})}ngOnInit(){}onTermsChanged(n){return(0,R.mG)(this,void 0,void 0,function*(){if(null!=this.selectedDate){let t=(0,f.p6)(this.selectedDate,"dd-MM-yyyy","en-US");this.knowCustIdForm.controls.dob.setValue(t),yield this.modalCtrl.getTop(),this.canDismiss=!0}else this.canDismiss=!1})}get f(){return this.knowCustIdForm.controls}submitCustId(){if(this.submitted=!0,this.knowCustIdForm.valid){let n=this.knowCustIdForm.value,t=n.dob.toString().split("-");this.globalService.getCustomerId({panno:n.panNo,dob:t[2]+t[1]+t[0]}).then(s=>{if(this.showCustIdModal=!0,s.btIsSuccess){this.success=!0;let a="";if(s.object.length>1)for(var u=0;u<s.object.length;u++)u!=s.object.length-1?a=s.object[u].CustomerCode+","+a:a+=s.object[u].CustomerCode;else a=s.object[0].CustomerCode;this.custIds=a}else this.success=!1,this.errorMsg=s.vcDescription}).catch(s=>{})}else this.knowCustIdForm.markAllAsTouched()}tryAgain(){this.success=!1,this.custIds="",this.submitted=!1,this.showCustIdModal=!1,this.knowCustIdForm.reset()}backToLogin(){this.router.navigate(["loginwithcustid"])}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(l.IN),e.Y36(y.U),e.Y36(g.F0),e.Y36(p.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-know-your-cust-id"]],decls:28,vars:10,consts:[[1,"typ-transparent",3,"type","typeTitle","backbtn"],[1,"lyt-section","typ-bg",3,"fullscreen"],[1,"content-inner","lyt-section","typ-bg"],[1,"content"],[1,"form-cont","app-form"],[1,"bs-title-desc","ion-text-start"],[1,"page-title"],[1,"sub-title"],[1,"form-wrapper",3,"formGroup"],["lines","none",1,"app-form-group"],["position","floating",1,"app-field-label"],["type","text","placeholder","Pan number","formControlName","panNo",1,"app-form-control"],["class","error-msg",4,"ngIf"],["lines","none","id","open-modal","expand","block",1,"app-form-group"],["type","text","readonly","true","placeholder","dd/mm/yyyy","formControlName","dob",1,"app-form-control"],[1,"button-cont"],[1,"app-btn","btn-default",3,"click"],["id","example-modal","trigger","open-modal",3,"presentingElement","canDismiss"],["modal",""],["class","bs-modal typ-appReview",4,"ngIf"],[1,"error-msg"],[4,"ngIf"],["slot","end"],[3,"click"],["presentation","date",3,"ngModel","ionChange","ngModelChange"],[1,"bs-modal","typ-appReview"],[1,"modal-wrap"],[1,"head"],["class","title",4,"ngIf"],[1,"footer"],[1,"act-wrap"],["class","app-btn btn-link",3,"click",4,"ngIf"],[1,"title"],[1,"cm-line-break"],[1,"app-btn","btn-link",3,"click"]],template:function(n,t){1&n&&(e._UZ(0,"app-header",0),e.TgZ(1,"ion-content",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3",6),e._uU(7,"Know your Customer ID"),e.qZA(),e.TgZ(8,"h4",7),e._uU(9," You are one steps away from getting your User ID "),e.qZA()(),e.TgZ(10,"form",8)(11,"ion-item",9)(12,"ion-label",10),e._uU(13,"Pan number"),e.qZA(),e._UZ(14,"ion-input",11),e.qZA(),e.YNc(15,V,2,1,"div",12),e.TgZ(16,"ion-item",13)(17,"ion-label",10),e._uU(18,"Date of birth"),e.qZA(),e._UZ(19,"ion-input",14),e.qZA(),e.YNc(20,X,2,1,"div",12),e.qZA(),e.TgZ(21,"div",15)(22,"ion-button",16),e.NdJ("click",function(){return t.submitCustId()}),e._uU(23,"Submit"),e.qZA()()()()(),e.TgZ(24,"ion-modal",17,18),e.YNc(26,$,10,1,"ng-template"),e.qZA()(),e.YNc(27,oe,9,4,"div",19)),2&n&&(e.Q6J("type","normal")("typeTitle","logo")("backbtn",!0),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(9),e.Q6J("formGroup",t.knowCustIdForm),e.xp6(5),e.Q6J("ngIf",t.f.panNo.touched&&t.f.panNo.errors),e.xp6(5),e.Q6J("ngIf",t.f.dob.touched&&t.f.dob.errors),e.xp6(4),e.Q6J("presentingElement",t.presentingElement)("canDismiss",t.canDismiss),e.xp6(3),e.Q6J("ngIf",t.showCustIdModal))},dependencies:[l.YG,l.Sm,l.W2,l.x4,l.Gu,l.pK,l.Ie,l.Q$,l.wd,l.sr,l.ki,l.QI,l.j9,h.G,f.O5,p._Y,p.JJ,p.JL,p.On,p.sg,p.u],styles:[".content[_ngcontent-%COMP%]{padding:0 32px}app-header[_ngcontent-%COMP%]   .cm-img[_ngcontent-%COMP%]{margin-right:40px!important}app-header[_ngcontent-%COMP%]   .typ-transparent.cm-img[_ngcontent-%COMP%]{height:56px;padding:4px;margin-right:40px}.page-title[_ngcontent-%COMP%]{font-size:2rem;line-height:2.8rem;font-weight:600;text-align:center}.sub-title[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2.8rem;font-weight:500;margin:1rem 0}.form-wrapper[_ngcontent-%COMP%]{margin-top:3rem}.button-cont[_ngcontent-%COMP%]{text-align:center;margin-top:3rem}.error-msg[_ngcontent-%COMP%]{color:red;margin-top:1rem;font-size:12px}.content-inner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-cont[_ngcontent-%COMP%]{top:4%}ion-modal[_ngcontent-%COMP%]{--height: 50%;--width:90% ;--width: fit-content;--min-width: 290px;--border-radius: 6px;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4)}ion-modal[_ngcontent-%COMP%]::part(backdrop){opacity:1}.sc-ion-buttons-md-h[_ngcontent-%COMP%]{background:white;border-radius:200px}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:#840c6f;--color: white}[_nghost-%COMP%]   .calendar-day.calendar-day-active[_ngcontent-%COMP%]:after{width:20px;height:20px}"]}),i})();const se=function(){return["/landing"]};let pe=(()=>{class i{constructor(){this.slideOpts={initialSlide:0,speed:300,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1}}}ngOnInit(){}ngAfterViewInit(){}}return i.pageName="AppintroPage",i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-app-intro"]],viewQuery:function(n,t){if(1&n&&e.Gf(l.Hr,5),2&n){let r;e.iGM(r=e.CRH())&&(t.slides=r.first)}},decls:34,vars:6,consts:[[1,"bs-appIntro"],[1,"app-intro-logo-wrap"],[1,"typ-transparent",3,"type","typeTitle"],[1,"introSlider"],["pager","",3,"options"],[1,"introSlider1"],[1,"mod-appintro"],[1,"title"],[1,"cm-bold"],[1,"introSlider2"],[1,"introSlider3"],[1,"ion-text-center","skipButton"],[1,"app-btn","btn-link",3,"routerLink","slot"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-content",0)(1,"ion-header",1),e._UZ(2,"app-header",2),e.qZA(),e.TgZ(3,"div",3)(4,"ion-slides",4)(5,"ion-slide",5)(6,"div",6)(7,"h2",7)(8,"span"),e._uU(9,"Watch your"),e.qZA(),e.TgZ(10,"span",8),e._uU(11,"dream home"),e.qZA(),e.TgZ(12,"span"),e._uU(13,"come to life!"),e.qZA()()()(),e.TgZ(14,"ion-slide",9)(15,"div",6)(16,"h2",7)(17,"span"),e._uU(18,"Manage your"),e.qZA(),e.TgZ(19,"span",8),e._uU(20,"payments"),e.qZA(),e.TgZ(21,"span"),e._uU(22,"at a click"),e.qZA()()()(),e.TgZ(23,"ion-slide",10)(24,"div",6)(25,"h2",7)(26,"span"),e._uU(27,"Secure way to access"),e.qZA(),e._UZ(28,"br"),e.TgZ(29,"span",8),e._uU(30,"your documents!"),e.qZA()()()()()(),e.TgZ(31,"div",11)(32,"ion-button",12),e._uU(33,"Skip"),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("type","normal")("typeTitle","logo"),e.xp6(2),e.Q6J("options",t.slideOpts),e.xp6(28),e.Q6J("routerLink",e.DdM(5,se))("slot","end"))},dependencies:[l.YG,l.W2,l.Gu,l.A$,l.Hr,l.YI,h.G,g.rH],styles:[".skipButton[_ngcontent-%COMP%]{position:fixed;bottom:2rem;width:100%}.skipButton[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none}.title[_ngcontent-%COMP%]   .cm-bold[_ngcontent-%COMP%]{margin:0 .5rem}"]}),i})(),le=(()=>{class i{constructor(){}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-tabs"]],decls:1,vars:0,template:function(n,t){1&n&&e._UZ(0,"router-outlet")},dependencies:[g.lC]}),i})();const x=(0,d(7423).fo)("Keyboard");let A=(()=>{class i{constructor(){}onKeyDown(n){let t=n;-1!==[46,8,9,27,13,110].indexOf(t.keyCode)||65===t.keyCode&&(t.ctrlKey||t.metaKey)||67===t.keyCode&&(t.ctrlKey||t.metaKey)||86===t.keyCode&&(t.ctrlKey||t.metaKey)||88===t.keyCode&&(t.ctrlKey||t.metaKey)||t.keyCode>=35&&t.keyCode<=39||(t.shiftKey||t.keyCode<48||t.keyCode>57)&&(t.keyCode<96||t.keyCode>105)&&t.preventDefault()}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","appOnlyNumber",""]],hostBindings:function(n,t){1&n&&e.NdJ("keydown",function(c){return t.onKeyDown(c)})}}),i})();function ae(i,o){1&i&&(e.TgZ(0,"div",36),e._uU(1," Entered pin does not match with Above pin. "),e.qZA())}function ue(i,o){if(1&i&&(e.TgZ(0,"div",34),e.YNc(1,ae,2,0,"div",35),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",!n.formErr.secondPin.errors.match)}}const de=[{path:"",component:le,children:[{path:"AppIntroPage",component:pe},{path:"know-your-cust-id",component:re},{path:"landing",component:L},{path:"loginwithcustid",component:B},{path:"otp",component:H},{path:"set-pin",component:(()=>{class i{constructor(n,t,r,c){this.route=n,this.globalService=t,this.fb=r,this.storage=c,this.setfirstPin="",this.setSecondPin="",this.pinGroup=r.group({firstPin:r.group({pin1:r.control("",p.kI.required),pin2:r.control({value:"",disabled:!0},p.kI.required),pin3:r.control({value:"",disabled:!0},p.kI.required),pin4:r.control({value:"",disabled:!0},p.kI.required)}),secondPin:r.group({pin1:r.control("",p.kI.required),pin2:r.control({value:"",disabled:!0},p.kI.required),pin3:r.control({value:"",disabled:!0},p.kI.required),pin4:r.control({value:"",disabled:!0},p.kI.required)})}),this.pinGroup.get("firstPin").valueChanges.subscribe(s=>{s.pin1&&this.pinGroup.get("firstPin").get("pin2").enable({onlySelf:!0}),s.pin2&&this.pinGroup.get("firstPin").get("pin3").enable({onlySelf:!0}),s.pin3&&this.pinGroup.get("firstPin").get("pin4").enable({onlySelf:!0}),s.pin1&&s.pin2&&s.pin3&&s.pin4&&(this.setfirstPin=s.pin1+s.pin2+s.pin3+s.pin4)}),this.pinGroup.get("secondPin").valueChanges.subscribe(s=>{s.pin1&&this.pinGroup.get("secondPin").get("pin2").enable({onlySelf:!0}),s.pin2&&this.pinGroup.get("secondPin").get("pin3").enable({onlySelf:!0}),s.pin3&&this.pinGroup.get("secondPin").get("pin4").enable({onlySelf:!0}),s.pin1&&s.pin2&&s.pin3&&s.pin4?(this.setSecondPin=s.pin1+s.pin2+s.pin3+s.pin4,this.isPinMatching(this.setfirstPin,this.setSecondPin)?this.submitted=!0:this.pinGroup.get("secondPin").setErrors({match:!1})):this.submitted=!1})}ngOnInit(){x.addListener("keyboardDidShow",n=>{x.setAccessoryBarVisible({isVisible:!0})})}get firstGroup(){return this.pinGroup.get("firstPin").controls}get secondGroup(){return this.pinGroup.get("secondPin").controls}isPinMatching(n,t){return n==t}get formErr(){return this.pinGroup.controls}fnsetPin(){this.submitted&&(this.globalService.setPinValue=this.setfirstPin.toString(),this.storage.set("AccessPin",this.globalService.setPinValue),this.globalService.setInitialProject(),this.globalService.isPhoneUnlocked=!0,this.route.navigate(["/dashboard"]))}toggleInputType(n,t,r){return n.pristine?"number":(t.focus(),"password")}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(g.F0),e.Y36(y.U),e.Y36(p.qu),e.Y36(b.K))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-set-pin"]],decls:43,vars:5,consts:[[1,"typ-transparent",3,"type","typeTitle"],[1,"lyt-section","typ-bg"],[1,"content-inner","lyt-section","typ-bg"],[1,"content"],[1,"form-cont","app-form"],[1,"bs-form"],[1,"form-title"],[3,"formGroup","ngSubmit"],[1,"form-group-wrap"],[1,"field-label"],[1,"cm-bold"],["formGroupName","firstPin",1,"form-group","ion-text-center"],[1,"otp-parent","display-flex-content"],["lines","none",1,"app-otp-input"],["autofocus","true","appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin1","formControlName","pin1",1,"app-form-control",3,"keyup"],["codeBox1",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin2","formControlName","pin2",1,"app-form-control",3,"keyup"],["codeBox2",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin3","formControlName","pin3",1,"app-form-control",3,"keyup"],["codeBox3",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin4","formControlName","pin4",1,"app-form-control",3,"keyup"],["codeBox4",""],["formGroupName","secondPin",1,"form-group","ion-text-center"],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin11","formControlName","pin1",1,"app-form-control",3,"keyup"],["codeBox5",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin22","formControlName","pin2",1,"app-form-control",3,"keyup"],["codeBox6",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin33","formControlName","pin3",1,"app-form-control",3,"keyup"],["codeBox7",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin44","formControlName","pin4",1,"app-form-control",3,"keyup"],["codeBox8",""],["class","error",4,"ngIf"],[1,"button-parent","ion-text-center"],["type","submit",1,"app-btn","btn-default",3,"disabled"],[1,"error"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(n,t){if(1&n){const r=e.EpF();e._UZ(0,"app-header",0),e.TgZ(1,"ion-content",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2",6),e._uU(7,"Set your pin"),e.qZA(),e.TgZ(8,"form",7),e.NdJ("ngSubmit",function(){return t.fnsetPin()}),e.TgZ(9,"div",8)(10,"span",9)(11,"span",10),e._uU(12,"Enter pin"),e.qZA()(),e.TgZ(13,"div",11)(14,"div",12)(15,"ion-item",13)(16,"ion-input",14,15),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(19);return e.KtG(t.globalService.onKeyEvent(s,u,""))}),e.qZA(),e.TgZ(18,"ion-input",16,17),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(21),a=e.MAs(17);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(20,"ion-input",18,19),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(23),a=e.MAs(19);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(22,"ion-input",20,21),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(32),a=e.MAs(21);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA()()()()(),e.TgZ(24,"div",8)(25,"span",9)(26,"span",10),e._uU(27,"Re-enter pin"),e.qZA()(),e.TgZ(28,"div",22)(29,"div",12)(30,"ion-item",13)(31,"ion-input",23,24),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(34),a=e.MAs(32);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(33,"ion-input",25,26),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(36),a=e.MAs(32);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(35,"ion-input",27,28),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(38),a=e.MAs(34);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(37,"ion-input",29,30),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(38),a=e.MAs(36);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA()()()()(),e.YNc(39,ue,2,1,"div",31),e.TgZ(40,"div",32)(41,"ion-button",33),e._uU(42,"PROCEED"),e.qZA()()()()()()()()}2&n&&(e.Q6J("type","normal")("typeTitle","logo"),e.xp6(8),e.Q6J("formGroup",t.pinGroup),e.xp6(31),e.Q6J("ngIf",t.formErr.secondPin.touched&&t.formErr.secondPin.invalid),e.xp6(2),e.Q6J("disabled",!t.submitted))},dependencies:[l.YG,l.W2,l.pK,l.Ie,l.j9,h.G,f.O5,p._Y,p.JJ,p.JL,p.nD,p.sg,p.u,p.x0,A]}),i})()},{path:"enter-pin",component:(()=>{class i{constructor(n,t,r,c,s,u){this.route=n,this.fb=t,this.globalService=r,this.storage=c,this.elementRef=s,this.renderer=u,this.encrypt=!0,this.disableEnteredPin={inputType:"old",disable:!1},this.enterpinGroup=t.group({pin1:t.control("",p.kI.required),pin2:t.control({value:"",disabled:!0},p.kI.required),pin3:t.control({value:"",disabled:!0},p.kI.required),pin4:t.control({value:"",disabled:!0},p.kI.required)}),this.enterpinGroup.valueChanges.subscribe(a=>{a.pin1&&this.enterpinGroup.get("pin2").enable({onlySelf:!0}),a.pin2&&this.enterpinGroup.get("pin3").enable({onlySelf:!0}),a.pin3&&this.enterpinGroup.get("pin4").enable({onlySelf:!0}),a.pin1&&a.pin2&&a.pin3&&a.pin4?(this.generatedPinColapse=a.pin1+a.pin2+a.pin3+a.pin4,this.submitted=!0,this.globalService.enteredPin=this.generatedPinColapse.toString()):this.submitted=!1})}ngOnInit(){}changeInput(){this.encrypt=!1}get formErr(){return this.enterpinGroup.controls}fnValidatePin(){this.storage.get("AccessPin").then(n=>{this.globalService.enteredPin==n?(this.globalService.setInitialProject().then(t=>{}),null!=this.globalService.notificationMsg&&(this.globalService.appOpenedOnlyFromNotification=!0,setTimeout(()=>{this.globalService.openNotificationTab()},500)),this.route.navigate(["/dashboard"]),this.globalService.isPhoneUnlocked=!0):(this.globalService.clearPinInputs(),this.clearPin(),this.globalService.universalAlert("","PIN incorrect","Ok"))})}clearPin(){this.enterpinGroup.reset()}fnForgetPin(){this.globalService.showConfirmationAlertPrompt("Reset PIN","Do you want to reset PIN")}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(g.F0),e.Y36(p.qu),e.Y36(y.U),e.Y36(b.K),e.Y36(e.SBq),e.Y36(e.Qsj))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-enter-pin"]],decls:32,vars:5,consts:[[1,"typ-transparent",3,"type","typeTitle"],[1,"lyt-section","typ-bg"],[1,"content-inner"],[1,"content"],[1,"form-cont","app-form"],[1,"bs-form"],[1,"bs-title-desc","ion-text-left"],[1,"title"],[1,"sub-title"],[1,"form-group-wrap"],[1,"field-label"],[1,"cm-bold"],[1,"form-group","ion-text-center"],[3,"formGroup"],["lines","none",1,"app-otp-input"],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin1","formControlName","pin1","required","",1,"app-form-control",3,"keyup"],["codeBox1",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin2","formControlName","pin2",1,"app-form-control",3,"keyup"],["codeBox2",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin3","formControlName","pin3",1,"app-form-control",3,"keyup"],["codeBox3",""],["appOnlyNumber","","type","password","inputmode","numeric","maxlength","1","name","pin4","formControlName","pin4",1,"app-form-control",3,"keyup"],["codeBox4",""],[1,"button-parent","ion-text-center"],[1,"app-btn","btn-default",3,"disabled","click"],[1,"button-parent","typ-link","ion-text-center"],[1,"app-btn","btn-link",3,"click"]],template:function(n,t){if(1&n){const r=e.EpF();e._UZ(0,"app-header",0),e.TgZ(1,"ion-content",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2",7),e._uU(8,"Hello"),e.qZA(),e.TgZ(9,"h3",8),e._uU(10),e.qZA()(),e.TgZ(11,"div",9)(12,"span",10)(13,"span",11),e._uU(14,"Enter your 4 digit pin"),e.qZA()(),e.TgZ(15,"div",12)(16,"form",13)(17,"ion-item",14)(18,"ion-input",15,16),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(21),a=e.MAs(19);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(20,"ion-input",17,18),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(23),a=e.MAs(19);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(22,"ion-input",19,20),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(25),a=e.MAs(21);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA(),e.TgZ(24,"ion-input",21,22),e.NdJ("keyup",function(s){e.CHM(r);const u=e.MAs(25),a=e.MAs(23);return e.KtG(t.globalService.onKeyEvent(s,u,a))}),e.qZA()(),e.TgZ(26,"div",23)(27,"ion-button",24),e.NdJ("click",function(){return t.fnValidatePin()}),e._uU(28,"PROCEED"),e.qZA()(),e.TgZ(29,"div",25)(30,"ion-button",26),e.NdJ("click",function(){return t.fnForgetPin()}),e._uU(31," FORGET PIN "),e.qZA()()()()()()()()()()}2&n&&(e.Q6J("type","normal")("typeTitle","logo"),e.xp6(10),e.hij(" Welcome ",t.globalService.selectedProjectObj.customerName," "),e.xp6(6),e.Q6J("formGroup",t.enterpinGroup),e.xp6(11),e.Q6J("disabled",!t.submitted))},dependencies:[l.YG,l.W2,l.pK,l.Ie,l.j9,h.G,p._Y,p.JJ,p.JL,p.Q7,p.nD,p.sg,p.u,A]}),i})()},{path:"",redirectTo:"AppIntroPage",pathMatch:"full"}]},{path:"",redirectTo:"AppIntroPage",pathMatch:"full"},{path:"**",redirectTo:"error",pathMatch:"full"}];let ge=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(de),g.Bz]}),i})();var me=d(9365);let he=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[C,I.A],imports:[l.Pc,k.U,f.ez,p.u5,ge,p.UX,me.D]}),i})()}}]);