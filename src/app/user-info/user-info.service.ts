import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Welcome } from "./welcome.model";

@Injectable({providedIn: 'root'})
export class WelcomeService{

private baseUrl:string = 'https://stackoverflow-app-d553f-default-rtdb.firebaseio.com/';
private myInfoEndpoint:string = 'my-info.json';

constructor(private http: HttpClient){
    
}

getUserInfo(){
    console.log(this.baseUrl + this.myInfoEndpoint);
    return this.http.get<Welcome[]>(this.baseUrl + this.myInfoEndpoint);

    }
}