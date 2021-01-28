import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
  subscriptionServices!: Subscription;
  description!: string;
  servicesObj!:any;
  apiService: ApiService;
  constructor(private inject: Injector) {
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getServicesApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionServices) {this.subscriptionServices.unsubscribe(); }
  }

  getServicesApi(){
    this.subscriptionServices = this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.description = res.services_description;
        this.servicesObj = res.services_icon_with_text;
      }
    )
  }

}
