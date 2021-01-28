import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { UserModel } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserStorageService {

    USER_KEY = 'u-ul-02K';
    TOKEN_KEY = 'po-o3l-ek3';
    
    constructor(@Inject(PLATFORM_ID) private platformId: string,
                private transferState: TransferState){
    }

    
    logOut(){
        if(isPlatformBrowser(this.platformId)){
            window.localStorage.removeItem(this.USER_KEY);
            window.localStorage.removeItem(this.TOKEN_KEY);   
        }
    }

    saveUser(user:object){
        if(isPlatformBrowser(this.platformId)){
            const userNew = JSON.stringify(user);
            window.localStorage.removeItem(this.USER_KEY);
            window.localStorage.setItem(this.USER_KEY, userNew);
        }
    }

    getUser(): UserModel | null {
        if (isPlatformBrowser(this.platformId)){
            const stringObj = window.localStorage.getItem(this.USER_KEY);
            if(!!stringObj){
                return JSON.parse(stringObj);
            }
        }
        return null;
    }

    getUserLocal() {
        return this.transferState.get(makeStateKey(this.USER_KEY), null);
    }

    saveUserLocal(user:object) {
        this.transferState.remove(makeStateKey(this.USER_KEY));
        this.transferState.set(makeStateKey(this.USER_KEY), user);
    }

    saveToken(token:string){
        if(isPlatformBrowser(this.platformId)){
            window.localStorage.removeItem(this.TOKEN_KEY);
            window.localStorage.setItem(this.TOKEN_KEY, token);
        }
    }

    getToken(): string | null{
        if(isPlatformBrowser(this.platformId)){
            return window.localStorage.getItem(this.TOKEN_KEY);
        }
        return null;
    }



}