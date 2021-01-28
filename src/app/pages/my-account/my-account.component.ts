import { isPlatformBrowser } from '@angular/common';
import { Component, ComponentFactoryResolver, Inject, Injector, OnDestroy, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { NavService } from 'src/app/service/nav.service';
import { UserStorageService } from 'src/app/service/user-storage.service';
import { UserApiModel } from './../../model/user-api.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit, OnDestroy {

  @ViewChild('footerComp', { read: ViewContainerRef }) private footerViewContainerRef!: ViewContainerRef;

  user: UserApiModel = {
    address: '',
    age: '',
    avatar: {
      url: '',
      id: '',
      provider: ''
    },
    confirmed: false,
    email: '',
    id: '',
    provider: '',
    username: '',
    website: '',
    name: '',
    description: '',
    location: '',
    imgDefault: true
  }
  userId!:string;
  subscriptionUser!: Subscription;
  subscriptionUpdateUser!: Subscription;
  subscription3$!: Subscription;
  avatarProfile: any;
  authService: AuthService;
  userService: UserStorageService;
  navService: NavService;
  userNew!:boolean;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private inject: Injector,
              @Inject(PLATFORM_ID) private platformId:string,) {
                this.userService = this.inject.get(UserStorageService);
                this.authService = this.inject.get(AuthService);
                this.navService = this.inject.get(NavService);
               }

  ngOnInit(): void {
    this.checkUser();
    import('./../../component/footer/footer.component').then(
      ({ FooterComponent }) => {
        const component = this.componentFactoryResolver.resolveComponentFactory(
          FooterComponent
        );
        this.footerViewContainerRef?.createComponent(component);
      }
    );
  }


  checkUser(){
    const user = this.userService.getUser();
    if(!!user?.username){
      this.navService.changeNav(true);
      this.getApiUser(user.id);
      this.userId = user.id;
    }else {
      this.navService.changeNav(false);
    }
  }

  getApiUser(id:string){
    this.subscriptionUser = this.authService.getUser(id).subscribe(
      (res: UserApiModel)  => {
        this.user.address = res.address;
        this.user.age = res.age;
        this.user.confirmed = res.confirmed;
        this.user.email = res.email;
        this.user.id = res.id;
        this.user.provider = res.provider;
        this.user.username = res.username;
        this.user.website = res.website;
        this.user.name = res.name;
        this.user.description = res.description;
        this.user.location = res.location;
        this.user.imgDefault = res.imgDefault;
        if(res.imgDefault && !(res.avatar?.url!)){
          this.user.avatar.url = 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg';
        }else{
          this.user.avatar.url = `${res.avatar?.url}`;
          this.user.avatar.id = res.avatar?.id!;
        }
      },
      err => {
        err;
      }
    )
  }

  updateApiUser(){
    this.subscriptionUpdateUser = this.authService.updateUser(this.userId,this.user).subscribe(
      res => {
        if(isPlatformBrowser(this.platformId)){
          window.location.href = 'my-account'
        }
      },
      err => {
        err;
      }
    );
  }

  home(){
    if(isPlatformBrowser(this.platformId)){
      window.location.href = ''
    }
  }

  getUploadFile(event:any){
    const formData = new FormData();
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      this.avatarProfile = file;
      formData.append('files', this.avatarProfile);
      if(formData){
        this.subscription3$ = this.authService.uploadAvatar(formData)
          .subscribe( (res: any[]) => {
            if(res.length > 0 && !this.user.imgDefault){
              this.authService.deleteAvatar(this.user.avatar.id).subscribe(
                res1 => {
                  this.user.avatar = res[0];
                  this.user.avatar.url = `${res[0].url}`;
                },
                err => err
              );
            } 
            if(this.user.imgDefault){
              this.user.imgDefault = false;
              this.user.avatar = res[0];
              this.user.avatar.url = `${res[0].url}`;
            }
          }, (err: any) => {
            err;
          });
        }
    }
  }

  ngOnDestroy(): void {
    if(this.subscriptionUpdateUser) { this.subscriptionUpdateUser.unsubscribe()};
    if(this.subscriptionUser) {this.subscriptionUser.unsubscribe(); }
    if(this.subscription3$) {this.subscription3$.unsubscribe(); }
  }

  

}
