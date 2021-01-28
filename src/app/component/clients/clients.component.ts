import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

declare var $:any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit, OnDestroy {

  description!: string;
  carouselObj: any;
  subscriptionClient!: Subscription;
  carousel_1!: string;
  apiUrl!: string;
  carousel_2!: string;
  carousel_3!: string;
  carousel_4!: string;
  carousel_5!: string;
  carousel_6!: string;
  carousel_8!: string;
  carousel_7!: string;
  apiService: ApiService;

  constructor(@Inject(PLATFORM_ID) private platformId: string,
              @Inject('BASE_URL') private baseUrl: string,
              private inject: Injector) {
                this.apiUrl = this.baseUrl;
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getClientApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionClient) { this.subscriptionClient.unsubscribe(); }
  }

  getClientApi(){
    this.subscriptionClient = this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.description = res.client_description;
        const carousel = res.client_carousel_image;
        if(carousel.carousel_1.provider === 'cloudinary'){
          this.carousel_1 =`${carousel.carousel_1.url}`;
        }else{
          this.carousel_1 =`${this.apiUrl}${carousel.carousel_1.url}`;
        }
        if(carousel.carousel_2.provider === 'cloudinary'){
          this.carousel_2 =`${carousel.carousel_2.url}`;
        }else{
          this.carousel_2 =`${this.apiUrl}${carousel.carousel_2.url}`;
        }
        if(carousel.carousel_3.provider === 'cloudinary'){
          this.carousel_3 =`${carousel.carousel_3.url}`;
        }else{
          this.carousel_3 =`${this.apiUrl}${carousel.carousel_3.url}`;
        }
        if(carousel.carousel_4.provider === 'cloudinary'){
          this.carousel_4 =`${carousel.carousel_4.url}`;
        }else{
          this.carousel_4 =`${this.apiUrl}${carousel.carousel_4.url}`;
        }
        if(carousel.carousel_5.provider === 'cloudinary'){
          this.carousel_5 =`${carousel.carousel_5.url}`;
        } else {
          this.carousel_5 =`${this.apiUrl}${carousel.carousel_5.url}`;
        }
        if(carousel.carousel_6.provider === 'cloudinary'){
          this.carousel_6 =`${carousel.carousel_6.url}`;
        } else {
          this.carousel_6 =`${this.apiUrl}${carousel.carousel_6.url}`;
        }
        if(carousel.carousel_7.provider === 'cloudinary'){
          this.carousel_7 =`${carousel.carousel_7.url}`;
        } else {
          this.carousel_7 =`${this.apiUrl}${carousel.carousel_7.url}`;
        }
        if(carousel.carousel_8.provider === 'cloudinary'){
          this.carousel_8 =`${carousel.carousel_8.url}`;
        } else {
          this.carousel_8 =`${this.apiUrl}${carousel.carousel_8.url}`;
        }
        this.initCarousel();
      }
    );
  }


  initCarousel(){
    if(isPlatformBrowser(this.platformId)){
      $('.clients-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 2
          },
          768: {
            items: 4
          },
          900: {
            items: 6
          }
        }
      });
    }
  }

}
