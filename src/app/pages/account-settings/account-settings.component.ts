import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavService } from 'src/app/service/nav.service';
import { UserStorageService } from 'src/app/service/user-storage.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  @ViewChild('footerComp', { read: ViewContainerRef }) private footerViewContainerRef!: ViewContainerRef;
  navService: NavService;
  userService: UserStorageService;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private inject: Injector) {
                this.userService = this.inject.get(UserStorageService);
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
    }else {
      this.navService.changeNav(false);
    }
  }
}
