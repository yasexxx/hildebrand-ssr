(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Sc9x:function(t,n,o){"use strict";o.r(n),o.d(n,"ContactComponent",function(){return a});var e=o("fXoL"),c=o("PLN7");let a=(()=>{class t{constructor(t,n,o){this.platformId=t,this.baseUrl=n,this.inject=o,this.apiUrl=this.baseUrl,this.apiService=this.inject.get(c.a)}ngOnInit(){this.getContactApi()}ngOnDestroy(){this.subscriptionContact&&this.subscriptionContact.unsubscribe()}getContactApi(){this.subscriptionContact=this.apiService.getAnyApiParams("home-page").subscribe(t=>{this.description=t.contact_description,this.contactObj=t.contact_item})}}return t.\u0275fac=function(n){return new(n||t)(e.Gb(e.B),e.Gb("BASE_URL"),e.Gb(e.r))},t.\u0275cmp=e.Ab({type:t,selectors:[["app-contact"]],decls:55,vars:6,consts:[["id","contact",1,"wow","fadeInUp"],[1,"container"],[1,"section-header"],[1,"custom-light"],[1,"row","contact-info"],[1,"col-md-4"],[1,"contact-address"],[1,"ion-ios-location-outline"],[1,"contact-phone"],[1,"ion-ios-telephone-outline"],[3,"href"],[1,"contact-email"],[1,"ion-ios-email-outline"],[1,"container","mb-4"],["src",e.fc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.405017910001!2d123.92032931428388!3d10.309435270459687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzM0LjAiTiAxMjPCsDU1JzIxLjEiRQ!5e0!3m2!1sen!2sph!4v1611155771511!5m2!1sen!2sph"),"width","100%","height","380","frameborder","0","allowfullscreen","",2,"border","0"],[1,"form"],["id","sendmessage"],["id","errormessage"],["action","","method","post","role","form",1,"contactForm"],[1,"form-row"],[1,"form-group","col-md-6"],["type","text","name","name","id","name","placeholder","Your Name","data-rule","minlen:4","data-msg","Please enter at least 4 chars",1,"form-control"],[1,"validation"],["type","email","name","email","id","email","placeholder","Your Email","data-rule","email","data-msg","Please enter a valid email",1,"form-control"],[1,"form-group"],["type","text","name","subject","id","subject","placeholder","Subject","data-rule","minlen:4","data-msg","Please enter at least 8 chars of subject",1,"form-control"],["name","message","rows","5","data-rule","required","data-msg","Please write something for us","placeholder","Message",1,"form-control"],[1,"text-center"],["type","submit"]],template:function(t,n){1&t&&(e.Kb(0,"section",0),e.Kb(1,"div",1),e.Kb(2,"div",2),e.Kb(3,"h2",3),e.cc(4,"Contact Us"),e.Jb(),e.Kb(5,"p"),e.cc(6),e.Jb(),e.Jb(),e.Kb(7,"div",4),e.Kb(8,"div",5),e.Kb(9,"div",6),e.Hb(10,"i",7),e.Kb(11,"h3"),e.cc(12,"Address"),e.Jb(),e.Kb(13,"address"),e.cc(14),e.Jb(),e.Jb(),e.Jb(),e.Kb(15,"div",5),e.Kb(16,"div",8),e.Hb(17,"i",9),e.Kb(18,"h3"),e.cc(19,"Phone Number"),e.Jb(),e.Kb(20,"p"),e.Kb(21,"a",10),e.cc(22),e.Jb(),e.Jb(),e.Jb(),e.Jb(),e.Kb(23,"div",5),e.Kb(24,"div",11),e.Hb(25,"i",12),e.Kb(26,"h3"),e.cc(27,"Email"),e.Jb(),e.Kb(28,"p"),e.Kb(29,"a",10),e.cc(30),e.Jb(),e.Jb(),e.Jb(),e.Jb(),e.Jb(),e.Jb(),e.Kb(31,"div",13),e.Hb(32,"iframe",14),e.Jb(),e.Kb(33,"div",1),e.Kb(34,"div",15),e.Kb(35,"div",16),e.cc(36,"Your message has been sent. Thank you!"),e.Jb(),e.Hb(37,"div",17),e.Kb(38,"form",18),e.Kb(39,"div",19),e.Kb(40,"div",20),e.Hb(41,"input",21),e.Hb(42,"div",22),e.Jb(),e.Kb(43,"div",20),e.Hb(44,"input",23),e.Hb(45,"div",22),e.Jb(),e.Jb(),e.Kb(46,"div",24),e.Hb(47,"input",25),e.Hb(48,"div",22),e.Jb(),e.Kb(49,"div",24),e.Hb(50,"textarea",26),e.Hb(51,"div",22),e.Jb(),e.Kb(52,"div",27),e.Kb(53,"button",28),e.cc(54,"Send Message"),e.Jb(),e.Jb(),e.Jb(),e.Jb(),e.Jb(),e.Jb()),2&t&&(e.wb(6),e.dc(n.description),e.wb(8),e.dc(null==n.contactObj?null:n.contactObj.address_info),e.wb(7),e.Wb("href","tel:"+(null==n.contactObj?null:n.contactObj.phone_num_info),e.Zb),e.wb(1),e.dc(null==n.contactObj?null:n.contactObj.phone_num_info),e.wb(7),e.Wb("href","mailto:"+(null==n.contactObj?null:n.contactObj.email_info),e.Zb),e.wb(1),e.dc(null==n.contactObj?null:n.contactObj.email_info))},styles:["#contact[_ngcontent-%COMP%]{padding:30px 0}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{margin-bottom:20px;text-align:center}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:48px;display:inline-block;margin-bottom:10px;color:#17b631}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   address[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;color:#000}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-bottom:15px;font-weight:700;text-transform:uppercase;color:#999}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}#contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#17b631}#contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .contact-email[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .contact-phone[_ngcontent-%COMP%]{margin-bottom:20px}#contact[_ngcontent-%COMP%]   #google-map[_ngcontent-%COMP%]{height:290px;margin-bottom:20px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage[_ngcontent-%COMP%]{color:#17b631;border:1px solid #17b631}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage[_ngcontent-%COMP%]{display:none;text-align:center;padding:15px;font-weight:600;margin-bottom:15px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage[_ngcontent-%COMP%]{color:red;border:1px solid red}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #errormessage.show[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   #sendmessage.show[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:block}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .validation[_ngcontent-%COMP%]{color:red;display:none;margin:0 0 20px;font-weight:400;font-size:13px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px 14px;border-radius:0;box-shadow:none;font-size:15px}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]{background:#17b631;border:0;border-radius:3px;padding:10px 30px;color:#fff;transition:.4s;cursor:pointer}#contact[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover{background:#59ce6c}#map[_ngcontent-%COMP%]{width:100%;height:380px}"]}),t})()}}]);