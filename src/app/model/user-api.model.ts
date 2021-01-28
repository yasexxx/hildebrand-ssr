export interface UserApiModel {
    address: string,
    age: string,
    avatar:{
        url:string;
        id: string;
        provider: string;
    }
    name: string;
    confirmed: boolean,
    email: string,
    id: string,
    provider: string,
    username: string,
    description: string,
    location: string,
    website: string,
    imgDefault: boolean
}