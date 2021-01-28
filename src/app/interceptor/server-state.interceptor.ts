import { Injectable, NgZone } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import * as memoryCache from 'memory-cache';
import { of } from 'rxjs';


@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

    cacheTimeMins = 60 *4;
    constructor(private transferState: TransferState,
                private ngZone: NgZone){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const cachedData = memoryCache.get(req.url);
        if(cachedData){
            this.transferState.set(makeStateKey(req.url), cachedData);
            return of(new HttpResponse({ body: cachedData, status: 200}));
        }
        return next.handle(req).pipe(
            tap( event => {
                if(event instanceof HttpResponse){
                    this.transferState.set(makeStateKey(req.url), event.body);
                    this.ngZone.runOutsideAngular(
                        () => {
                            memoryCache.put(req.url, event.body, 1000* this.cacheTimeMins);
                        }
                    );
                }
            })
        )
    }
}