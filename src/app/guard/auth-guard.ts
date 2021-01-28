import { Injectable, Injector } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStorageService } from '../service/user-storage.service';

@Injectable({
    providedIn: 'root'
})
export class LoginAndSignupAuthGuard implements CanLoad {
    userService: UserStorageService;
        
    constructor(private inject: Injector,
                private router: Router ){
        this.userService = this.inject.get(UserStorageService);
    }
    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        const user = this.userService.getUser();
        if(!!user){
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
