"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2395],{2395:(z,v,c)=>{c.r(v),c.d(v,{DashBoardPageModule:()=>$});var r=c(4881),g=c(6895),f=c(4719),m=c(8694),t=c(6738),Z=c(9300),T=c(9734),x=c(5687),A=c(7909);const D=["ProjectStagesSlides"],U=["content"];function S(e,n){if(1&e&&(t.TgZ(0,"ion-slide"),t._UZ(1,"img",18),t.ALo(2,"defaultImagePipe"),t.qZA()),2&e){const i=n.$implicit;t.xp6(1),t.s9C("src",t.lcZ(2,1,i),t.LSH)}}function I(e,n){if(1&e&&(t.TgZ(0,"div",20),t._UZ(1,"div",21),t.TgZ(2,"span",22),t._uU(3),t.qZA(),t.TgZ(4,"span",23),t._uU(5,"Estimated Completion"),t.qZA()()),2&e){const i=t.oxw(2);t.xp6(3),t.Oqu(i.estimationCompletionDate)}}function q(e,n){if(1&e&&(t.ynx(0),t.YNc(1,I,6,1,"div",19),t.BQk()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.estimationCompletionDate&&""!==i.estimationCompletionDate)}}function C(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",35),t.NdJ("click",function(){t.CHM(i);const o=t.oxw(2);return t.KtG(o.viewImage(o.floorPlanImg))}),t._UZ(1,"img",36),t.qZA()}if(2&e){const i=t.oxw(2);t.xp6(1),t.s9C("src",i.floorPlanImg,t.LSH)}}function w(e,n){if(1&e&&(t.TgZ(0,"div")(1,"div",24)(2,"div",23),t._uU(3),t.qZA(),t.TgZ(4,"h3",25),t._uU(5,"Your dream home"),t.qZA(),t.YNc(6,C,2,1,"div",26),t.TgZ(7,"div",27)(8,"ion-grid",28)(9,"ion-row",29)(10,"ion-col",30)(11,"div",31)(12,"div",32),t._uU(13,"Apartment/Unit Type"),t.qZA(),t.TgZ(14,"div",33),t._uU(15),t.qZA()()(),t.TgZ(16,"ion-col",30)(17,"div",31)(18,"div",32),t._uU(19,"Floor"),t.qZA(),t.TgZ(20,"div",33),t._uU(21),t.qZA()()()(),t.TgZ(22,"ion-row",29)(23,"ion-col",30)(24,"div",31)(25,"div",32),t._uU(26,"Total Usable Area"),t.qZA(),t.TgZ(27,"div",33),t._uU(28),t.qZA()()(),t.TgZ(29,"ion-col",30)(30,"div",31)(31,"div",32),t._uU(32,"Tower/Zone/Pocket"),t.qZA(),t.TgZ(33,"div",33),t._uU(34),t.qZA()()()(),t.TgZ(35,"ion-row",29)(36,"ion-col",30)(37,"div",31)(38,"div",32),t._uU(39,"Unit"),t.qZA(),t.TgZ(40,"div",33),t._uU(41),t.qZA()()(),t.TgZ(42,"ion-col",30)(43,"div",31)(44,"div",32),t._uU(45,"Agreement Value"),t.qZA(),t.TgZ(46,"div",33),t._UZ(47,"i",34),t._uU(48),t.ALo(49,"currencyDisplay"),t.qZA()()()()()(),t.TgZ(50,"h3",25),t._uU(51,"Life that awaits you"),t.qZA()()()),2&e){const i=t.oxw();t.xp6(3),t.Oqu(i.projectDescription),t.xp6(3),t.Q6J("ngIf",null!==i.floorPlanImg),t.xp6(9),t.Oqu(i.apartmentType),t.xp6(6),t.Oqu(i.buildingFloor),t.xp6(7),t.hij("",i.apartmentSize," Sq. Mtrs."),t.xp6(6),t.Oqu(i.apartmentWing),t.xp6(7),t.Oqu(i.unit),t.xp6(7),t.hij("",t.lcZ(49,8,i.aggrementValue)," ")}}function j(e,n){if(1&e&&(t.TgZ(0,"ion-slide"),t._UZ(1,"div",39),t.TgZ(2,"div",40),t._uU(3),t.qZA(),t.TgZ(4,"div",41),t._UZ(5,"div",39)(6,"img",36),t.ALo(7,"defaultImagePipe"),t.qZA()()),2&e){const i=n.$implicit;t.xp6(3),t.Oqu(i.vcName),t.xp6(3),t.s9C("src",t.lcZ(7,2,i.vcImageUrl),t.LSH)}}function y(e,n){if(1&e&&(t.TgZ(0,"div",37)(1,"ion-slides",38),t.YNc(2,j,8,4,"ion-slide",7),t.qZA()()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("options",i.slideOpts2),t.xp6(1),t.Q6J("ngForOf",i.blogsList)}}function P(e,n){1&e&&(t.TgZ(0,"h3",25),t._uU(1," Construction progress "),t.qZA())}const B=function(e,n,i){return{completed:e,active:n,disabled:i}};function b(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"ion-slide")(1,"div",42),t.NdJ("click",function(){const o=t.CHM(i),a=o.index,l=o.$implicit,_=t.oxw();return t.KtG(_.showSegment(a,l.vcName))}),t.TgZ(2,"div",43),t._UZ(3,"div",44),t.TgZ(4,"span",22),t._uU(5),t.qZA(),t.TgZ(6,"span",23),t._uU(7),t.qZA()()()()}if(2&e){const i=n.$implicit;t.xp6(1),t.Q6J("ngClass",t.kEZ(3,B,i.stageCompleted,i.btIsActive,!i.btIsActive&&!i.stageCompleted)),t.xp6(4),t.Oqu(i.vcDate),t.xp6(2),t.Oqu(i.vcName)}}function O(e,n){if(1&e&&(t.TgZ(0,"div",45),t._uU(1),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.hij(" ",i.selectedConstructionPhase," ")}}function N(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"ion-slide",50),t.NdJ("click",function(){const a=t.CHM(i).$implicit,l=t.oxw(2);return t.KtG(l.playVideo(a))}),t.TgZ(1,"div",40),t._uU(2),t.qZA(),t.TgZ(3,"div",41),t._UZ(4,"img",51),t.qZA()()}if(2&e){const i=n.$implicit;t.xp6(2),t.Oqu(i.vcTitle),t.xp6(2),t.s9C("src",i.previewImg,t.LSH)}}function J(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",46)(1,"div",47)(2,"img",48),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.viewImage(o.constructionStageImg))}),t.qZA()(),t.TgZ(3,"div",37)(4,"ion-slides",6),t.YNc(5,N,5,2,"ion-slide",49),t.qZA()()()}if(2&e){const i=t.oxw();t.xp6(2),t.s9C("src",i.constructionStageImg,t.LSH),t.xp6(2),t.Q6J("options",i.slideOpts2),t.xp6(1),t.Q6J("ngForOf",i.constructionVideoList.videoList)}}function L(e,n){1&e&&(t.TgZ(0,"h3",25),t._uU(1," Unit Images "),t.qZA())}function Q(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"ion-slide")(1,"div",52),t.NdJ("click",function(){const a=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.viewImage(a.vcShortFileUrl))}),t.TgZ(2,"div",43),t._UZ(3,"img",53),t.qZA()()()}if(2&e){const i=n.$implicit;t.xp6(3),t.Q6J("src",i.vcShortFileUrl,t.LSH)}}function F(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",35),t.NdJ("click",function(){t.CHM(i);const o=t.oxw(2);return t.KtG(o.viewImage(o.floorPlanImg))}),t._UZ(1,"img",36),t.qZA()}if(2&e){const i=t.oxw(2);t.xp6(1),t.s9C("src",i.floorPlanImg,t.LSH)}}function k(e,n){if(1&e&&(t.TgZ(0,"div")(1,"div",24)(2,"div",23),t._uU(3),t.qZA(),t.TgZ(4,"h3",25),t._uU(5,"Your dream home"),t.qZA(),t.YNc(6,F,2,1,"div",26),t.TgZ(7,"div",27)(8,"ion-grid")(9,"ion-row")(10,"ion-col",54)(11,"div",31)(12,"div",32),t._uU(13,"Apartment/Unit Type"),t.qZA(),t.TgZ(14,"div",33),t._uU(15),t.qZA()()(),t.TgZ(16,"ion-col",54)(17,"div",31)(18,"div",32),t._uU(19,"Floor"),t.qZA(),t.TgZ(20,"div",33),t._uU(21),t.qZA()()()(),t.TgZ(22,"ion-row")(23,"ion-col",54)(24,"div",31)(25,"div",32),t._uU(26,"Total Usable Area"),t.qZA(),t.TgZ(27,"div",33),t._uU(28),t.qZA()()(),t.TgZ(29,"ion-col",54)(30,"div",31)(31,"div",32),t._uU(32,"Tower/Zone/Pocket"),t.qZA(),t.TgZ(33,"div",33),t._uU(34),t.qZA()()()(),t.TgZ(35,"ion-row")(36,"ion-col",54)(37,"div",31)(38,"div",32),t._uU(39,"Unit"),t.qZA(),t.TgZ(40,"div",33),t._uU(41),t.qZA()()(),t.TgZ(42,"ion-col",54)(43,"div",31)(44,"div",32),t._uU(45,"Agreement Value"),t.qZA(),t.TgZ(46,"div",33),t._UZ(47,"i",34),t._uU(48),t.ALo(49,"currencyDisplay"),t.qZA()()()()()(),t.TgZ(50,"h3",25),t._uU(51,"Life that awaits you"),t.qZA()()()),2&e){const i=t.oxw();t.xp6(3),t.Oqu(i.projectDescription),t.xp6(3),t.Q6J("ngIf",null!==i.floorPlanImg),t.xp6(9),t.Oqu(i.apartmentType),t.xp6(6),t.Oqu(i.buildingFloor),t.xp6(7),t.hij("",i.apartmentSize," Sq. Mtrs."),t.xp6(6),t.Oqu(i.apartmentWing),t.xp6(7),t.Oqu(i.unit),t.xp6(7),t.hij("",t.lcZ(49,8,i.aggrementValue)," ")}}function Y(e,n){if(1&e&&(t.TgZ(0,"ion-slide"),t._UZ(1,"div",39),t.TgZ(2,"div",40),t._uU(3),t.qZA(),t.TgZ(4,"div",41),t._UZ(5,"div",39)(6,"img",36),t.ALo(7,"defaultImagePipe"),t.qZA()()),2&e){const i=n.$implicit;t.xp6(3),t.Oqu(i.vcName),t.xp6(3),t.s9C("src",t.lcZ(7,2,i.vcImageUrl),t.LSH)}}function M(e,n){if(1&e&&(t.TgZ(0,"div",37)(1,"ion-slides",6),t.YNc(2,Y,8,4,"ion-slide",7),t.qZA()()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("options",i.slideOpts2),t.xp6(1),t.Q6J("ngForOf",i.blogsList)}}const H=[{path:"",component:(()=>{class e{constructor(i,s,o){this.globalService=i,this.domCtrl=s,this.route=o,this.projectStages=[],this.blogsList=[],this.projectImages=[],this.constructionVideoList=[],this.aggrementValue="0",this.selectedConstructionPhase="",this.showConstructionProgressDetails=!1,this.estimationCompletionDate="",this.showEstimationCompletionDate=!1,this.slideOpts={initialSlide:0,autoplay:{delay:4e3,disableOnInteraction:!1}},this.slideOpts2={slidesPerView:2,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},this.slideOpts3={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},this.slideOpts4={slidesPerView:3,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}}}ngOnInit(){this.showConstructionProgressDetails=!1,this.getDetails(),this.pageReload()}pageReload(){this.globalService.eventsample.subscribe(i=>{console.log(i),i&&this.getDetails()})}getDetails(){this.globalService.getProjectDetails().then(i=>{var s;if(i.btIsSuccess){let o=i.object;if(this.projectName=o.vcName,this.projectImages=o.customerProjectDetail_ImagesList,this.unitImages=o.customerProjectDetail_UnitImagesList,this.floorPlanImg=o.vcUnitLayout,this.apartmentType=o.vcUnitType,this.buildingFloor=o.vcFloor,this.apartmentSize=o.vcUnitSize,this.apartmentWing=o.vcApparment,this.unit=o.vcUnitNo,this.aggrementValue=o.vcAgreementValue,this.towerCode=o.vcTowerCode,o.vcEstimationCompletionDate.length&&null!=o.vcEstimationCompletionDate&&(this.estimationCompletionDate=o.vcEstimationCompletionDate),o.customerProjectDetail_StagesList.length){this.projectStages=o.customerProjectDetail_StagesList;for(let a=0;a<this.projectStages.length;a++){let l=this.projectStages[a];-1==(l.btIsActive?a:-1)?(l.stageCompleted=!0,a>s&&(l.stageCompleted=!1)):(s=a,l.stageCompleted=!1);let p=l.videoList;for(let d=0;d<p.length;d++){let u=p[d].vcLink,h=u.slice(u.lastIndexOf("=")+1,u.length);p[d].linkName=h,p[d].previewImg="https://img.youtube.com/vi/"+h+"/mqdefault.jpg"}}this.possessionDate=o.vcPossessionDate}this.projectDescription=o.vcDescription,this.blogsList=o.customerProjectDetail_BlogsList,this.constructionVideoList=this.projectStages[0],setTimeout(()=>{this.projectStages.length<=3&&(this.ProjectStagesSlides.slideTo(0,0),this.ProjectStagesSlides.lockSwipes(!0))},100)}}).catch(i=>{})}viewImage(i){(null!=i||i.length)&&this.globalService.previewImage(i)}playVideo(i){i.fileType="video"}showSegment(i,s){this.selectedConstructionPhase=s,this.constructionVideoList=this.projectStages[i],this.constructionStageImg=this.projectStages[i].vcImageUrl,this.showConstructionProgressDetails||setTimeout(()=>{this.content.scrollToBottom(300)},500),this.showConstructionProgressDetails=!0}}return e.pageName="DashboardPage",e.\u0275fac=function(i){return new(i||e)(t.Y36(Z.U),t.Y36(r.Cb),t.Y36(m.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],viewQuery:function(i,s){if(1&i&&(t.Gf(r.Hr,5),t.Gf(D,5),t.Gf(U,5)),2&i){let o;t.iGM(o=t.CRH())&&(s.slides=o.first),t.iGM(o=t.CRH())&&(s.ProjectStagesSlides=o.first),t.iGM(o=t.CRH())&&(s.content=o.first)}},decls:28,vars:19,consts:[[1,"typ-transparent",3,"type","typeTitle","pageNameVal"],["scrollEvents","true",1,"app-lyt-dashboard",3,"fullscreen","ionScroll"],["content",""],[1,"vetical-top"],[1,"lyt-banner","typ-slider"],[1,"loading-img-container"],["pager","",3,"options"],[4,"ngFor","ngForOf"],[1,"lyt-dashboard",2,"width","100vw"],[4,"ngIf"],["class","bs-slider typ-project",4,"ngIf"],[1,"lyt-construction"],["class","title",4,"ngIf"],["pager","false",1,"tabs-list",3,"options"],["ProjectStagesSlides",""],["class","selected-stage",4,"ngIf"],["class","tab-content active",4,"ngIf"],["UnitImagesSlides",""],["onError","this.src='../../../assets/images/default-fallback-image_2.png';",3,"src"],["class","bs-icon-desc typ-construct w-100",4,"ngIf"],[1,"bs-icon-desc","typ-construct","w-100"],[1,"icon","typ-possession"],[1,"date"],[1,"desc"],[1,"bs-project-info"],[1,"title"],["class","floor-plan",3,"click",4,"ngIf"],[1,"details-parent"],[1,"grid"],[1,"ion-text-center","row"],["size","6",1,"col"],[1,"mod-project-details"],[1,"head"],[1,"data"],[1,"icon-inr","rs-symbol"],[1,"floor-plan",3,"click"],["onError","this.src='../../../assets/images/default-fallback-image_2.png';",1,"cm-img-responsive",3,"src"],[1,"bs-slider","typ-project"],["pager","false",3,"options"],[1,"loading-gif"],[1,"name"],[1,"img-parent"],[1,"tab-btn",3,"ngClass","click"],[1,"bs-icon-desc","typ-construct"],[1,"icon","typ-plinth"],[1,"selected-stage"],[1,"tab-content","active"],["id","anchorName2",1,"prj-stage-img"],[1,"cm-img-responsive",3,"src","click"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"cm-img-responsive",3,"src"],[1,"tab-btn",3,"click"],[1,"unit-img",3,"src"],["col-6",""]],template:function(i,s){1&i&&(t._UZ(0,"app-header",0),t.TgZ(1,"ion-content",1,2),t.NdJ("ionScroll",function(a){return s.globalService.headerSticky(a)}),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"div"),t.qZA(),t.TgZ(7,"ion-slides",6),t.YNc(8,S,3,3,"ion-slide",7),t.qZA()(),t.TgZ(9,"div",8),t.YNc(10,q,2,1,"ng-container",9),t.YNc(11,w,52,10,"div",9),t.YNc(12,y,3,2,"div",10),t.TgZ(13,"div",11),t.YNc(14,P,2,0,"h3",12),t.TgZ(15,"ion-slides",13,14),t.YNc(17,b,8,7,"ion-slide",7),t.qZA(),t.YNc(18,O,2,1,"div",15),t.TgZ(19,"div"),t.YNc(20,J,6,3,"div",16),t.qZA()(),t.TgZ(21,"div",11),t.YNc(22,L,2,0,"h3",12),t.TgZ(23,"ion-slides",13,17),t.YNc(25,Q,4,1,"ion-slide",7),t.qZA()(),t.YNc(26,k,52,10,"div",9),t.YNc(27,M,3,2,"div",10),t.qZA()()()),2&i&&(t.Q6J("type","menu")("typeTitle","pageName")("pageNameVal",s.projectName),t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(6),t.Q6J("options",s.slideOpts),t.xp6(1),t.Q6J("ngForOf",s.projectImages),t.xp6(2),t.Q6J("ngIf",s.projectStages.length),t.xp6(1),t.Q6J("ngIf",s.projectStages.length),t.xp6(1),t.Q6J("ngIf",s.projectStages.length),t.xp6(2),t.Q6J("ngIf",s.projectStages&&s.projectStages.length),t.xp6(1),t.Q6J("options",s.slideOpts3),t.xp6(2),t.Q6J("ngForOf",s.projectStages),t.xp6(1),t.Q6J("ngIf",s.selectedConstructionPhase.length&&s.showConstructionProgressDetails),t.xp6(2),t.Q6J("ngIf",s.projectStages.length&&s.showConstructionProgressDetails),t.xp6(2),t.Q6J("ngIf",s.unitImages&&s.unitImages.length),t.xp6(1),t.Q6J("options",s.slideOpts4),t.xp6(2),t.Q6J("ngForOf",s.unitImages),t.xp6(1),t.Q6J("ngIf",!s.projectStages.length),t.xp6(1),t.Q6J("ngIf",!s.projectStages.length))},dependencies:[r.wI,r.W2,r.jY,r.Nd,r.A$,r.Hr,g.mk,g.sg,g.O5,T.G,x.v,A.S],styles:["ion-content[_ngcontent-%COMP%]{--offset-bottom: 0px !important;position:absolute}.vetical-top[_ngcontent-%COMP%]{margin-top:-57px}.swiper-container[_ngcontent-%COMP%]{padding:5rem 0rem 0rem}.unit-img[_ngcontent-%COMP%]{width:100%;height:100%}"]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(H),m.Bz]}),e})();var V=c(754),G=c(9365);let $=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Pc,g.ez,f.u5,E,V.U,G.D]}),e})()}}]);