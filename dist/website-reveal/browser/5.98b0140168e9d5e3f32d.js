(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{F4UR:function(n,t,e){"use strict";e.r(t),e.d(t,"LoginModule",function(){return f});var o=e("ofXK"),i=e("tyNb"),r=e("3Pt+"),c=e("Kj3r"),s=e("/uUt"),a=e("6uu6"),b=e("10JR"),d=e("2P9k"),p=e("fXoL"),g=e("xb3B");function u(n,t){if(1&n&&(p.Kb(0,"div"),p.Kb(1,"strong",30),p.cc(2),p.Jb(),p.Jb()),2&n){const n=p.Tb();p.wb(2),p.dc(n.errorMsg)}}function m(n,t){if(1&n){const n=p.Lb();p.Kb(0,"div",31),p.Kb(1,"button",32),p.Rb("click",function(){return p.Yb(n),p.Tb().switchBtn()}),p.Hb(2,"i",33),p.Jb(),p.Jb()}}const l=[{path:"",component:(()=>{class n{constructor(n,t,e){this.inject=n,this.fb=t,this.router=e,this.isInputted=!1,this.isError=!1,this.switchKey="password",this.password=new r.c,this.authService=this.inject.get(a.a),this.navService=this.inject.get(b.a),this.tokenService=this.inject.get(d.a),this.errorMsg="Please provide a valid username and password.",this.loginForm=this.fb.group({username:["",r.m.required],password:["",r.m.required]}),this.subscriptionKey=this.loginForm.controls.password.valueChanges.pipe(Object(c.a)(300),Object(s.a)()).subscribe(n=>{this.isInputted=""!==n})}ngOnInit(){}ngOnDestroy(){this.subscriptionLogin&&this.subscriptionLogin.unsubscribe(),this.subscriptionKey&&this.subscriptionKey.unsubscribe()}submitBtn(){this.subscriptionLogin=this.authService.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(n=>{var t;const e=n.user;let o=null===(t=null==e?void 0:e.tokenId)||void 0===t?void 0:t.token;o||(o=""),this.tokenService.saveToken(n.jwt),this.tokenService.saveUserLocal({email:e.email,id:e.id,provide:e.local,username:e.username,createdAt:e.createdAt,token:o}),this.tokenService.saveUser({email:e.email,id:e.id,provide:e.local,username:e.username,createdAt:e.createdAt,token:o}),this.navService.changeNav(!0),this.isError=!1,this.router.navigate([""])},n=>{this.isError=!0,this.loginForm.patchValue({password:""}),this.navService.changeNav(!1)})}switchBtn(){this.switchKey="password"!==this.switchKey?"password":"text"}}return n.\u0275fac=function(t){return new(t||n)(p.Gb(p.r),p.Gb(r.b),p.Gb(i.c))},n.\u0275cmp=p.Ab({type:n,selectors:[["app-login"]],decls:43,vars:4,consts:[[1,"container-wrapper"],[1,"custom-wrapper"],[1,"login-header"],[1,"site-logo","container","ml-sm-5","pl-sm-5"],["href",""],["src","assets/img/logo/site-logo.png","alt","Hildebrand-logo"],[1,"container"],["id","login-id",1,"card","card-custom"],[1,"form","card-header","card-wrapper","text-align-center"],[1,"card-title"],[1,"h3"],[4,"ngIf"],[3,"formGroup"],[1,"form-group"],[1,"ion-android-person"],["type","text","formControlName","username","name","username","id","username","placeholder","Username or email","required","",1,"form-control"],[1,"validation"],[1,"ion-locked"],["formControlName","password","name","password","id","password","placeholder","Password","required","",1,"form-control",3,"type"],["class","other-icon",4,"ngIf"],[1,"form-group",2,"font-size","12px"],["routerLink","/signup"],[1,"btn-option","card-wrapper"],[1,"btn","btn-success",3,"click"],[1,"flex"],[1,"btn-option","card-wrapper","my-4"],[1,"btn","btn-new","btn-danger"],[1,"ion-social-google","mr-5"],[1,"btn","btn-new","btn-primary"],[1,"ion-social-facebook","mr-5"],[1,"error-msg"],[1,"other-icon"],[2,"background","transparent","border","none","cursor","pointer",3,"click"],[1,"ion-eye"]],template:function(n,t){1&n&&(p.Kb(0,"div",0),p.Kb(1,"div",1),p.Kb(2,"div",2),p.Kb(3,"div",3),p.Kb(4,"a",4),p.Hb(5,"img",5),p.Jb(),p.Jb(),p.Jb(),p.Kb(6,"div",6),p.Kb(7,"div",7),p.Kb(8,"div",8),p.Kb(9,"span",9),p.Kb(10,"div",10),p.cc(11," Log in your account "),p.Jb(),p.bc(12,u,3,1,"div",11),p.Jb(),p.Kb(13,"form",12),p.Kb(14,"div",13),p.Hb(15,"i",14),p.Hb(16,"input",15),p.Hb(17,"div",16),p.Jb(),p.Kb(18,"div",13),p.Hb(19,"i",17),p.Hb(20,"input",18),p.Hb(21,"div",16),p.Jb(),p.bc(22,m,3,0,"div",19),p.Kb(23,"p",20),p.cc(24,"Don't have account yet? "),p.Kb(25,"a",21),p.cc(26,"click here"),p.Jb(),p.Jb(),p.Kb(27,"div",22),p.Kb(28,"button",23),p.Rb("click",function(){return t.submitBtn()}),p.cc(29,"Log in"),p.Jb(),p.Jb(),p.Jb(),p.Kb(30,"div",24),p.Hb(31,"hr"),p.Kb(32,"span"),p.cc(33,"or"),p.Jb(),p.Hb(34,"hr"),p.Jb(),p.Kb(35,"div",25),p.Kb(36,"button",26),p.Hb(37,"i",27),p.cc(38,"Continue with Google"),p.Jb(),p.Kb(39,"button",28),p.Hb(40,"i",29),p.cc(41,"Continue with Facebook"),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Jb(),p.Hb(42,"app-footer"),p.Jb()),2&n&&(p.wb(12),p.Wb("ngIf",t.isError),p.wb(1),p.Wb("formGroup",t.loginForm),p.wb(7),p.Wb("type",t.switchKey),p.wb(2),p.Wb("ngIf",t.isInputted))},directives:[o.j,r.n,r.h,r.e,r.a,r.g,r.d,r.l,i.d,g.FooterComponent],styles:[".container-wrapper[_ngcontent-%COMP%]{overflow-x:hidden}.custom-wrapper[_ngcontent-%COMP%]{background-color:#e1e5f1;min-height:140vh}.site-logo[_ngcontent-%COMP%]{cursor:pointer}.site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-top:10px}.login-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;background:#fff;height:80px}.login-redirect[_ngcontent-%COMP%]{margin:auto}.card-custom[_ngcontent-%COMP%]{width:500px;margin:2rem auto}.card-custom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:#fff}.card-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.card-title[_ngcontent-%COMP%]{text-align:center}.card-title[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:2rem 0}.btn-option[_ngcontent-%COMP%]{padding:0 2rem}.btn-option[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-bottom:20px}.flex[_ngcontent-%COMP%]{text-align:center}#login-id[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #login-id[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px 0 10px 70px;border-radius:0;box-shadow:none;font-size:15px}.form-group[_ngcontent-%COMP%]{padding:0 2rem}.btn-new[_ngcontent-%COMP%]{padding:10px 14px;border-radius:0;box-shadow:none;font-size:15px}.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;font-size:30px;margin-left:15px}.other-icon[_ngcontent-%COMP%]{font-size:30px;margin:-58px 0 0 370px}.error-msg[_ngcontent-%COMP%]{color:red}@media (max-width:545px){.card-custom[_ngcontent-%COMP%]{width:auto;margin:2rem 5px;overflow-x:scroll}.btn-option[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]{padding:0 .4rem}.site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding-top:20px;max-height:60px}.other-icon[_ngcontent-%COMP%]{margin:-58px 0 0 70vw}}@media (max-width:434px){.other-icon[_ngcontent-%COMP%]{margin:-58px 0 0 60vw}}@media (max-width:325px){.other-icon[_ngcontent-%COMP%]{margin:-58px 0 0 200px}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=p.Eb({type:n}),n.\u0275inj=p.Db({factory:function(t){return new(t||n)},imports:[[i.e.forChild(l)],i.e]}),n})(),f=(()=>{class n{}return n.\u0275mod=p.Eb({type:n}),n.\u0275inj=p.Db({factory:function(t){return new(t||n)},imports:[[o.c,h,r.f,r.k]]}),n})()}}]);