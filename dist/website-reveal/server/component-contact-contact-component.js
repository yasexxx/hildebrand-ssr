exports.ids=[2],exports.modules={Sc9x:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ContactComponent",function(){return ContactComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),src_app_service_api_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("PLN7");class ContactComponent{constructor(platformId,baseUrl,inject){this.platformId=platformId,this.baseUrl=baseUrl,this.inject=inject,this.apiUrl=this.baseUrl,this.apiService=this.inject.get(src_app_service_api_service__WEBPACK_IMPORTED_MODULE_1__.a)}ngOnInit(){this.getContactApi()}ngOnDestroy(){this.subscriptionContact&&this.subscriptionContact.unsubscribe()}getContactApi(){this.subscriptionContact=this.apiService.getAnyApiParams("home-page").subscribe(res=>{this.description=res.contact_description,this.contactObj=res.contact_item})}}ContactComponent.\u0275fac=function ContactComponent_Factory(t){return new(t||ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gc(_angular_core__WEBPACK_IMPORTED_MODULE_0__.T),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gc("BASE_URL"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gc(_angular_core__WEBPACK_IMPORTED_MODULE_0__.E))},ContactComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Ac({type:ContactComponent,selectors:[["app-contact"]],decls:55,vars:6,consts:[["id","contact",1,"wow","fadeInUp"],[1,"container"],[1,"section-header"],[1,"custom-light"],[1,"row","contact-info"],[1,"col-md-4"],[1,"contact-address"],[1,"ion-ios-location-outline"],[1,"contact-phone"],[1,"ion-ios-telephone-outline"],[3,"href"],[1,"contact-email"],[1,"ion-ios-email-outline"],[1,"container","mb-4"],["src",_angular_core__WEBPACK_IMPORTED_MODULE_0__.fd("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.405017910001!2d123.92032931428388!3d10.309435270459687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzM0LjAiTiAxMjPCsDU1JzIxLjEiRQ!5e0!3m2!1sen!2sph!4v1611155771511!5m2!1sen!2sph"),"width","100%","height","380","frameborder","0","allowfullscreen","",2,"border","0"],[1,"form"],["id","sendmessage"],["id","errormessage"],["action","","method","post","role","form",1,"contactForm"],[1,"form-row"],[1,"form-group","col-md-6"],["type","text","name","name","id","name","placeholder","Your Name","data-rule","minlen:4","data-msg","Please enter at least 4 chars",1,"form-control"],[1,"validation"],["type","email","name","email","id","email","placeholder","Your Email","data-rule","email","data-msg","Please enter a valid email",1,"form-control"],[1,"form-group"],["type","text","name","subject","id","subject","placeholder","Subject","data-rule","minlen:4","data-msg","Please enter at least 8 chars of subject",1,"form-control"],["name","message","rows","5","data-rule","required","data-msg","Please write something for us","placeholder","Message",1,"form-control"],[1,"text-center"],["type","submit"]],template:function ContactComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(0,"section",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(1,"div",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(2,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(3,"h2",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(4,"Contact Us"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(5,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(7,"div",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(8,"div",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(9,"div",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(10,"i",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(11,"h3"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(12,"Address"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(13,"address"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(14),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(15,"div",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(16,"div",8),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(17,"i",9),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(18,"h3"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(19,"Phone Number"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(20,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(21,"a",10),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(22),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(23,"div",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(24,"div",11),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(25,"i",12),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(26,"h3"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(27,"Email"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(28,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(29,"a",10),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(30),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(31,"div",13),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(32,"iframe",14),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(33,"div",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(34,"div",15),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(35,"div",16),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(36,"Your message has been sent. Thank you!"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(37,"div",17),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(38,"form",18),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(39,"div",19),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(40,"div",20),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(41,"input",21),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(42,"div",22),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(43,"div",20),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(44,"input",23),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(45,"div",22),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(46,"div",24),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(47,"input",25),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(48,"div",22),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(49,"div",24),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(50,"textarea",26),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc(51,"div",22),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(52,"div",27),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kc(53,"button",28),_angular_core__WEBPACK_IMPORTED_MODULE_0__.cd(54,"Send Message"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Jc()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.wc(6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.dd(ctx.description),_angular_core__WEBPACK_IMPORTED_MODULE_0__.wc(8),_angular_core__WEBPACK_IMPORTED_MODULE_0__.dd(null==ctx.contactObj?null:ctx.contactObj.address_info),_angular_core__WEBPACK_IMPORTED_MODULE_0__.wc(7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Wc("href","tel:"+(null==ctx.contactObj?null:ctx.contactObj.phone_num_info),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_0__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.dd(null==ctx.contactObj?null:ctx.contactObj.phone_num_info),_angular_core__WEBPACK_IMPORTED_MODULE_0__.wc(7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Wc("href","mailto:"+(null==ctx.contactObj?null:ctx.contactObj.email_info),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zc),_angular_core__WEBPACK_IMPORTED_MODULE_0__.wc(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.dd(null==ctx.contactObj?null:ctx.contactObj.email_info))},styles:["#contact[_ngcontent-%COMP%]{padding:30px 0}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{margin-bottom:20px;text-align:center}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:48px;display:inline-block;margin-bottom:10px;color:#17b631}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   address[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;color:#000}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-bottom:15px;font-weight:700;text-transform:uppercase;color:#999}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#17b631}#contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .contact-email[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .contact-phone[_ngcontent-%COMP%]{margin-bottom:20px}#contact[_ngcontent-%COMP%]   #google-map[_ngcontent-%COMP%]{height:290px;margin-bottom:20px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage[_ngcontent-%COMP%]{color:#17b631;border:1px solid #17b631}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage[_ngcontent-%COMP%]{display:none;text-align:center;padding:15px;font-weight:600;margin-bottom:15px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage[_ngcontent-%COMP%]{color:red;border:1px solid red}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage.show[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage.show[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:block}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .validation[_ngcontent-%COMP%]{color:red;display:none;margin:0 0 20px;font-weight:400;font-size:13px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px 14px;border-radius:0;box-shadow:none;font-size:15px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{background:#17b631;border:0;border-radius:3px;padding:10px 30px;color:#fff;transition:.4s;cursor:pointer}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover{background:#59ce6c}#map[_ngcontent-%COMP%]{width:100%;height:380px}"]})}};