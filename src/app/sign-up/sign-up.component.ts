import { Component } from "@angular/core";
import { WelcomeService } from "../home-layout/user-info.service";
import { SignUp } from "../home-layout/welcome.model";

@Component({
    selector:'app-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.css']

})
export class SignUpComponent{

constructor(private registerService : WelcomeService){}

onRegister(data : SignUp){

    console.log("Sign up prompt");
    this.registerService.registerNewAccount(data).subscribe(data => {
        console.log("Sign up");
    }
        
        )
}
}
