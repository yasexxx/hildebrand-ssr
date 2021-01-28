import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiModel } from '../model/user-api.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl!: string;
    http: HttpClient;
    constructor(private inject: Injector,
                @Inject(PLATFORM_ID) private platformId: string,
                @Inject('BASE_URL') private baseUrl:string){
        this.apiUrl = this.baseUrl;
        this.http = this.inject.get(HttpClient);
    }

    // post a request on user upon login
    login(username: string, password: string): Observable<any>{
        return this.http.post(`${this.apiUrl}/auth/local`, {
            identifier: username,
            password: password
        });
    }

    register(email:string, username: string, password: string): Observable<any>{
        return this.http.post(`${this.apiUrl}/auth/local/register`, {
            email: email,
            username: username,
            password: password
        });
    }

    getUser(id:string): Observable<UserApiModel>{
        return this.http.get<UserApiModel>(`${this.apiUrl}/users/${id}`);
    }

    updateUser(userId:string, obj: any): Observable<any> {
        let user;
        if(obj?.avatar?.id){
            user = {
                address: obj.address,
                age: obj.age,
                confirmed: obj.confirmed,
                description: obj.description,
                email: obj.email,
                id: obj.id,
                location: obj.location,
                name: obj.name,
                website: obj.website,
                avatar: obj.avatar,
                imgDefault: obj.imgDefault
            }
        }else {
            user = {
                address: obj.address,
                age: obj.age,
                confirmed: obj.confirmed,
                description: obj.description,
                email: obj.email,
                id: obj.id,
                location: obj.location,
                name: obj.name,
                website: obj.website,
                imgDefault: obj.imgDefault
            }
        }
        return this.http.put(`${this.baseUrl}/users/${userId}`, user);
    }

    uploadAvatar(form:any): Observable<any> {
        return this.http.post(`${this.apiUrl}/upload`, form);
    }

    deleteAvatar(id:string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/upload/files/${id}`);
    }



}