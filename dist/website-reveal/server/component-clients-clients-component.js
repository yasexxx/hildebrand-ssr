exports.ids=[1],exports.modules={UIZN:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ClientsComponent",function(){return ClientsComponent});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL"),src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("PLN7");class ClientsComponent{constructor(platformId,baseUrl,inject){this.platformId=platformId,this.baseUrl=baseUrl,this.inject=inject,this.apiUrl=this.baseUrl,this.apiService=this.inject.get(src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__.a)}ngOnInit(){this.getClientApi()}ngOnDestroy(){this.subscriptionClient&&this.subscriptionClient.unsubscribe()}getClientApi(){this.subscriptionClient=this.apiService.getAnyApiParams("home-page").subscribe(res=>{this.description=res.client_description;const carousel=res.client_carousel_image;"cloudinary"===carousel.carousel_1.provider?this.carousel_1=""+carousel.carousel_1.url:this.carousel_1=`${this.apiUrl}${carousel.carousel_1.url}`,"cloudinary"===carousel.carousel_2.provider?this.carousel_2=""+carousel.carousel_2.url:this.carousel_2=`${this.apiUrl}${carousel.carousel_2.url}`,"cloudinary"===carousel.carousel_3.provider?this.carousel_3=""+carousel.carousel_3.url:this.carousel_3=`${this.apiUrl}${carousel.carousel_3.url}`,"cloudinary"===carousel.carousel_4.provider?this.carousel_4=""+carousel.carousel_4.url:this.carousel_4=`${this.apiUrl}${carousel.carousel_4.url}`,carousel.carousel_5.provider,this.carousel_5=`${this.apiUrl}${carousel.carousel_5.url}`,carousel.carousel_6.provider,this.carousel_6=`${this.apiUrl}${carousel.carousel_6.url}`,carousel.carousel_7.provider,this.carousel_7=`${this.apiUrl}${carousel.carousel_7.url}`,carousel.carousel_8.provider,this.carousel_8=`${this.apiUrl}${carousel.carousel_8.url}`,this.initCarousel()})}initCarousel(){Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__.p)(this.platformId)&&$(".clients-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:2},768:{items:4},900:{items:6}}})}}ClientsComponent.\u0275fac=function ClientsComponent_Factory(t){return new(t||ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Gc(_angular_core__WEBPACK_IMPORTED_MODULE_1__.T),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Gc("BASE_URL"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Gc(_angular_core__WEBPACK_IMPORTED_MODULE_1__.E))},ClientsComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Ac({type:ClientsComponent,selectors:[["app-clients"]],decls:16,vars:9,consts:[["id","clients",1,"wow","fadeInUp"],[1,"container"],[1,"section-header"],[1,"custom-light"],[1,"owl-carousel","clients-carousel","owl-theme"],["loading","lazy","alt","carousel-1",3,"src"],["loading","lazy","alt","carousel-2",3,"src"],["loading","lazy","alt","carousel-3",3,"src"],["loading","lazy","alt","carousel-4",3,"src"],["loading","lazy","alt","carousel-5",3,"src"],["loading","lazy","alt","carousel-6",3,"src"],["loading","lazy","alt","carousel-7",3,"src"],["loading","lazy","alt","carousel-8",3,"src"]],template:function ClientsComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc(0,"section",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc(1,"div",1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc(2,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc(3,"h2",3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.cd(4,"Clients"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc(5,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.cd(6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc(7,"div",4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(8,"img",5),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(9,"img",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(10,"img",7),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(11,"img",8),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(12,"img",9),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(13,"img",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(14,"img",11),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Hc(15,"img",12),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.dd(ctx.description),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_1,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_2,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_3,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_4,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_5,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_6,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_7,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_1__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc("src",ctx.carousel_8,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Zc))},styles:["#clients[_ngcontent-%COMP%]{padding:30px 0}#clients[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;opacity:.5;transition:.3s;padding:15px 0}#clients[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:1}"]})}};