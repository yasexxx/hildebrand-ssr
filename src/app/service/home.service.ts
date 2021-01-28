import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    apiUrl!:string;
    http: HttpClient;
    
    constructor(private inject: Injector,
                @Inject('BASE_URL') private baseUrl: string){
                    this.apiUrl = this.baseUrl;
                    this.http = this.inject.get(HttpClient);
                }

    getHome(): Observable<any>{
        return this.http.get(`${this.apiUrl}/home-page`);
    }
}