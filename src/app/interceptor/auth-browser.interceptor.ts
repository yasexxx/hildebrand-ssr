import { Inject, Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { UserStorageService } from '../service/user-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: UserStorageService,
                @Inject('BASE_URL') private baseUrl:string){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authenReq = req;
        const mainSite = (authenReq.url).includes(this.baseUrl);
        const token = this.token.getToken();
        if (token !== null && mainSite && req.method !== 'GET'){
            authenReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        
        return next.handle(authenReq);
    }

}
