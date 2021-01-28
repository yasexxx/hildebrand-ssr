import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { NavService } from 'src/app/service/nav.service';
import { SeoService } from 'src/app/service/seo.service';
import { UserStorageService } from 'src/app/service/user-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isBrowser = false;
  isLogin!: Observable<boolean>;
  userName!: string;
  topbarContact = '';
  topbarEmail = '';
  twitterLink = '';
  googleLink = '';
  facebookLink = '';
  instagramLink = '';
  navService: NavService;
  userService: UserStorageService;
  apiService: ApiService;
  isLogo: boolean = true;
  siteTitle!: string;
  imgLogo!: string;
  subscriptionMeta!: Subscription;
  subscriptionHeader!: Subscription;
  constructor(private inject: Injector,
              private router: Router,
              private seoService: SeoService,
              @Inject('BASE_URL') private baseUrl:string,
              @Inject(PLATFORM_ID) private platformId: string) {
                this.navService = this.inject.get(NavService);
                this.userService = this.inject.get(UserStorageService);
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getMetaApi();
    this.isLogin = this.navService.navLogin$; // initialize route if it is user, if not return false;
    const user = this.getUsername()
    this.userName = user?.username ? user.username : ''; // check if user has username field;
    if(isPlatformBrowser(this.platformId)){
      this.isBrowser = true;
    }
    this.getHeaderApi();
  }

  ngOnDestroy(){
    if(this.subscriptionHeader) {this.subscriptionHeader.unsubscribe(); }
    if(this.subscriptionMeta) { this.subscriptionMeta.unsubscribe(); }
  }

  getHeaderApi(){
    this.subscriptionHeader = this.apiService.getAnyApiParams('site-logo').subscribe(
      res => {
        this.isLogo = res.isLogoUse;
        this.siteTitle = res.title;
        this.seoService.changeTitle(this.siteTitle);
        this.imgLogo = `${res.img_logo.url}`;
      }
    )
  }

  getMetaApi() {
    this.subscriptionMeta = this.apiService.getAnyApiParams('home-page-meta-data').subscribe(
      res => {
        this.seoService.updateMoreTags(res.metaName_keyword_content, res.meta_description_content, res.meta_twitter_domain,res.meta_twitter_title,
            res.meta_twitter_description,`${this.baseUrl}${res.twitter_image_src.url}`, res.meta_og_url, res.meta_title);
      }
    )
  }

  getUsername(){
    return this.userService.getUser();
  }

  logoutBtn(){
    this.userService.logOut();
    if(isPlatformBrowser(this.platformId)){
      this.router.navigateByUrl('login', { skipLocationChange: true }).then(
        () => { this.router.navigate(['']); }
      );
    }
  }



  

}
