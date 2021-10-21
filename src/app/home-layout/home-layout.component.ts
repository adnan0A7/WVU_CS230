import { Component } from "@angular/core";
import { Welcome } from "./welcome.model"
import { WelcomeService } from "./user-info.service";

@Component({
    selector:'app-home-layout',
    templateUrl: 'home-layout.component.html',

})
export class HomeLayoutComponent{

    welcomecards : Welcome[] = [];

    constructor(private welcomeService : WelcomeService ){

    }


    ngOnInit(): void {
        this.welcomeService.getUserInfo().subscribe(data=> {
          console.log(data);
          for(var item in data){
            console.log(data[item]);
           this.welcomecards.push(new Welcome(data[item]));
            
          }
        })

    }}