import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  subscriptionPortfolio!: Subscription;
  description: any;
  apiUrl!:string;
  portfolio_1!: { image: string; text: any; };
  portfolio_2!: { image: string; text: any; };
  portfolio_3!: { image: string; text: any; };
  portfolio_4!: { image: string; text: any; };
  portfolio_5!: { image: string; text: any; };
  portfolio_6!: { image: string; text: any; };
  portfolio_7!: { image: string; text: any; };
  portfolio_8!: { image: string; text: any; };
  apiService: ApiService;
  constructor(private inject: Injector,
              @Inject('BASE_URL') private baseUrl:string) { 
                this.apiUrl = this.baseUrl;
                this.apiService = this.inject.get(ApiService);
              }

  ngOnInit(): void {
    this.getPortfolioApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionPortfolio) { this.subscriptionPortfolio.unsubscribe(); }
  }

  getPortfolioApi(){
    this.subscriptionPortfolio = this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.description = res.portfolio_description;
        const portfolio = res.portfolio_item;
        this.portfolio_1 = {
          image: portfolio.item_image_1.provider === 'cloudinary' ? `${portfolio.item_image_1.url}` : `${this.apiUrl}${portfolio.item_image_1.url}`,
          text: portfolio.item_title_1
        }
        this.portfolio_2 = {
          image: portfolio.item_image_2.provider === 'cloudinary' ? `${portfolio.item_image_2.url}` : `${this.apiUrl}${portfolio.item_image_2.url}`,
          text: portfolio.item_title_2
        }
        this.portfolio_3 = {
          image: portfolio.item_image_3.provider === 'cloudinary' ? `${portfolio.item_image_3.url}` : `${this.apiUrl}${portfolio.item_image_3.url}`,
          text: portfolio.item_title_3
        }
        this.portfolio_4 = {
          image: portfolio.item_image_4.provider === 'cloudinary' ? `${portfolio.item_image_4.url}` : `${this.apiUrl}${portfolio.item_image_4.url}`,
          text: portfolio.item_title_4
        }
        this.portfolio_5 = {
          image: portfolio.item_image_5.provider === 'cloudinary' ? `${portfolio.item_image_5.url}` : `${this.apiUrl}${portfolio.item_image_5.url}`,
          text: portfolio.item_title_5
        }
        this.portfolio_6 = {
          image: portfolio.item_image_6.provider === 'cloudinary' ? `${portfolio.item_image_6.url}` : `${this.apiUrl}${portfolio.item_image_6.url}`,
          text: portfolio.item_title_6
        }
        this.portfolio_7 = {
          image: portfolio.item_image_7.provider === 'cloudinary' ? `${portfolio.item_image_7.url}` : `${this.apiUrl}${portfolio.item_image_7.url}`,
          text: portfolio.item_title_7
        }
        this.portfolio_8 = {
          image: portfolio.item_image_8.provider === 'cloudinary' ? `${portfolio.item_image_8.url}` : `${this.apiUrl}${portfolio.item_image_8.url}`,
          text: portfolio.item_title_8
        }
      }
    )
  }

}
