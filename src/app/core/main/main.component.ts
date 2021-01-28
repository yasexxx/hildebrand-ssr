import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ComponentFactoryResolver, Inject, Injector, OnDestroy, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HomeService } from 'src/app/service/home.service';
import { NavService } from 'src/app/service/nav.service';
import { UserStorageService } from 'src/app/service/user-storage.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[
    CommonModule
  ]
})
export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('footerComp', { read: ViewContainerRef }) private footerViewContainerRef!: ViewContainerRef;
  title = 'website-reveal';

  isRouteChange!: Observable<boolean>;
  subscriptionRoute!: Subscription;
  subscriptionHome!: Subscription;
  userService: UserStorageService;
  navService: NavService;
  homeService: HomeService;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver,
              private inject: Injector,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId:string){
                this.navService = this.inject.get(NavService);
                this.userService = this.inject.get(UserStorageService);
                this.homeService = this.inject.get(HomeService);
              }

  async ngOnInit() {;
    this.queryRoute();
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

  ngOnDestroy(): void {
    if(this.subscriptionRoute) { this.subscriptionRoute.unsubscribe(); }
    if(this.subscriptionHome) { this.subscriptionHome.unsubscribe(); }
  }

  queryRoute(){
    if(isPlatformBrowser(this.platformId)){
      this.subscriptionRoute = this.route.queryParams.subscribe(
         params => {
           const logOut = params.action;
           if(logOut === 'log-out'){
             this.userService.logOut();
             this.router.navigateByUrl('login', { skipLocationChange: true }).then(
               () => { this.router.navigate(['']); }
             );
           }
         }
       )
     }
  }
  
  checkUser(){
    const user = this.userService.getUser();
    if(!!user?.username){
      this.navService.changeNav(true);
    }else {
      this.navService.changeNav(false);
    }
  }

}
