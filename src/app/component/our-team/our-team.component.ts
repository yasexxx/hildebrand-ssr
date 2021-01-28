import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit, OnDestroy {

  apiUrl!:string;
  subscriptionTeam!: Subscription;
  teamItems!: any[];
  apiService: ApiService;

  constructor(private inject: Injector,
              @Inject('BASE_URL') private baseUrl:string) {
                this.apiUrl = this.baseUrl;
                this.apiService = this.inject.get(ApiService);
               }

  ngOnInit(): void {
    this.getTeamApi();
  }

  ngOnDestroy(): void {
    if(this.subscriptionTeam) {this.subscriptionTeam.unsubscribe(); }
  }

  getTeamApi(){
    this.subscriptionTeam= this.apiService.getAnyApiParams('home-page').subscribe(
      res => {
        this.teamItems = res.team_items;
      }
    )
  }

  showImg(item:any): any{
    if(!!item){
      return `${item.image.url}`;
    }
  }

}
