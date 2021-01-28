import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
  topbarContact!: string;
  topbarEmail!: string;
  facebookLink!: string;
  instagramLink!: string;
  googleLink!: string;
  twitterLink!: string;
  subscriptionTopBar!: Subscription;
  apiService: ApiService;

  constructor(private inject: Injector) {
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getHeaderApi();
  }

  getHeaderApi(){
    this.subscriptionTopBar = this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.topbarContact = res.topbar_contact_number;
        this.topbarEmail = res.topbar_email;
        const link = res.social_media_link;
        this.facebookLink = link.facebook_link;
        this.googleLink = link.google_link;
        this.instagramLink = link.instagram_link;
        this.twitterLink = link.twitter_link;
      }
    );
  }

  ngOnDestroy(): void {
    if(this.subscriptionTopBar) { this.subscriptionTopBar.unsubscribe(); }
  }

}
