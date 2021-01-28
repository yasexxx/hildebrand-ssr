import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiUrl!:string;
    http: HttpClient;
    constructor(private inject: Injector,
                @Inject('BASE_URL') private baseUrl: string){
                    this.apiUrl = baseUrl;
                    this.http = this.inject.get(HttpClient);
                }

    getAnyApiParams(params:string): Observable<any> {
        return this.http.get(`${this.apiUrl}/${params}`);
    }
}