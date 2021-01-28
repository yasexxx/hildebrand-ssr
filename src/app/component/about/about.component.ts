import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  subscriptionAbout!: Subscription;

  title!:string;
  subtitle!:string;
  bulletObj!:any;
  image!: string;
  apiUrl!:string;
  altDescription!: string;
  apiService: ApiService;
  constructor(private inject: Injector,
              @Inject('BASE_URL') private baseUrl:string) {
                this.apiUrl = this.baseUrl;
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getAboutApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionAbout){ this.subscriptionAbout.unsubscribe(); }
  }

  getAboutApi(){
    this.subscriptionAbout = this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.title = res.about_header_title;
        this.subtitle = res.about_header_subtitle;
        this.bulletObj = res.about_bullet;
        this.image = `${res.about_img.url}`;
        this.altDescription = res.about_img.alternativeText;
        
      }
    )
  }


}
