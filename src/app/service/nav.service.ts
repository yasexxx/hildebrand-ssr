import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavService {
    
    private navLoginSource = new BehaviorSubject<boolean>(false);
    private navCartSource = new BehaviorSubject<number>(0);
    
    // Observable streams
    navLogin$ = this.navLoginSource.asObservable();
    navCart$ = this.navCartSource.asObservable();
    

    // service commands
    changeNav(isTrue:boolean) {
        this.navLoginSource.next(isTrue);
    }
    changeCart(value:number) {
        this.navCartSource.next(value);
    }
}