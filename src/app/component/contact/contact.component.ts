import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild, ElementRef, AfterViewInit, Injector } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  apiUrl!:string;
  subscriptionContact!: Subscription;
  contactObj: any;
  description!:string;
  apiService: ApiService;

  constructor(@Inject(PLATFORM_ID) private platformId: string,
              @Inject('BASE_URL') private baseUrl: string,
              private inject: Injector) {
                this.apiUrl = this.baseUrl;
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getContactApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionContact){ this.subscriptionContact.unsubscribe(); }
  }

  getContactApi(){
    this.subscriptionContact = this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.description = res.contact_description;
        this.contactObj = res.contact_item;
      }
    );
  }

}
