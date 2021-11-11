import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthResponse } from "./authResponse";
import { LoginService } from "./log-in.service";

@Component({
    selector: 'app-log-in',
    templateUrl: 'log-in.component.html',
    styleUrls: ['log-in.component.css']
})
export class LogInComponent {

    public buttonClicked!: string;
    private authObserveable!: Observable<AuthResponse>;

    constructor(private loginService: LoginService) {

    }

    public onSubmit(data: NgForm) {
        console.log("Button clicked =" + this.buttonClicked);
        console.log(data.value);

        if (this.buttonClicked == 'SignUp') {
            this.authObserveable = this.loginService.signup(data.value.email, data.value.password)
        }
        if (this.buttonClicked == 'Login') {
            this.authObserveable = this.loginService.login(data.value.email, data.value.password)
        }

        this.authObserveable.subscribe(
            (data: AuthResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error.error.message);
            }
        );
        data.resetForm();

    }

}