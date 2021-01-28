import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { of } from 'rxjs';

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {

    constructor(private transferState: TransferState) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.method !== 'GET') {
            return next.handle(req);
          }
          const storedResponse = this.transferState.get(makeStateKey(req.url), null);
      
          if (storedResponse) {
            const response = new HttpResponse({ body: storedResponse, status: 200 });
            return of(response);
          }
      
          return next.handle(req);
    }
}