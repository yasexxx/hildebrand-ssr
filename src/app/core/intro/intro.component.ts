import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, OnDestroy {
  apiUrl!:string;

  introHeader!: string;
  btnsObj:any;
  carouselObj:any;
  subscriptionIntro!: Subscription;
  carousel_1: any;
  carousel_2: any;
  carousel_4: any;
  carousel_3: any;
  apiService: ApiService;
  constructor(private inject: Injector,
              @Inject('BASE_URL') private baseUrl: string) {
                this.apiUrl = this.baseUrl;
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getIntroApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionIntro){ this.subscriptionIntro.unsubscribe(); }
  }

  getIntroApi(){
    this.subscriptionIntro = this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.introHeader = res.intro_header_description;
        this.btnsObj = res.intro_button;
        let car1, car2,car3,car4;
          car1 = `${res.intro_carousel_image.carousel_1.url}`;
          car2 = `${res.intro_carousel_image.carousel_2.url}`;
          car3 = `${res.intro_carousel_image.carousel_3.url}`;
          car4 = `${res.intro_carousel_image.carousel_4.url}`;
       
        this.carousel_1 = {'background-image': `url(${car1})`};
        this.carousel_2 = {'background-image': `url(${car2})`};
        this.carousel_3 = {'background-image': `url(${car3})`};
        this.carousel_4 = {'background-image': `url(${car4})`};
      }
    )
  }


}
