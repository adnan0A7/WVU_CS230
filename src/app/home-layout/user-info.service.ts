import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignUp } from "./welcome.model";
import { UserInfo } from "./user-info.model";
import { Welcome } from "./welcome.model";

@Injectable({providedIn: 'root'})
export class WelcomeService{

get<T>(arg0: string) {
    throw new Error("Method not implemented.");
}

private baseUrl:string = 'https://stackoverflow-app-d553f-default-rtdb.firebaseio.com/';
private myInfoEndpoint:string = 'cards.json';
private register:string = 'sign-up.json';

constructor(private http: HttpClient){
    
}

getUserInfo(){
    console.log(this.baseUrl + this.myInfoEndpoint);
    return this.http.get<Welcome[]>(this.baseUrl + this.myInfoEndpoint);

}

modifyUserInfo(){

    var temp : UserInfo = {

        FirstName : "David",
        LastName : "Smith",
        Email : "https://github.com/adnan0A7/WVU_CS230",
        Github :"StackOverFlowe",


    }

    return this.http.put(this.baseUrl+this.myInfoEndpoint , temp);
}

registerNewAccount(data:SignUp){
    return this.http.post(this.baseUrl+this.register, data);
}

}