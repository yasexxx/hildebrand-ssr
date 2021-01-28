import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, OnDestroy {

  apiUrl!:string;
  description!: string;
  subscriptionTestimonials!: Subscription;
  testimonialArray: any[] = [];
  apiService: ApiService;
  constructor(@Inject(PLATFORM_ID) private platformId: string,
              private inject: Injector,
              @Inject('BASE_URL') private baseUrl:string) {
                this.apiUrl = this.baseUrl;
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.initCarousel();
    this.getTestimonialApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionTestimonials){ this.subscriptionTestimonials.unsubscribe(); }
  }

  getTestimonialApi(){
    this.subscriptionTestimonials= this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.description = res.testimonials_description;
        this.testimonialArray = res.testimonials_items;
      }
    )
  }
  
  showImg(item:any): any{
    if(!!item){
      
        return `${item.testimonial_image.url}`;
    }
  }

  initCarousel(){
    if(isPlatformBrowser(this.platformId)){
      // Testimonials carousel (uses the Owl Carousel library)
        $(".testimonials-carousel").owlCarousel({
          autoplay: true,
          dots: true,
          loop: true,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            900: {
              items: 3
            }
          }
        });
      }
  }

}
