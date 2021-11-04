import { Component } from "@angular/core";
import { Welcome } from "./welcome.model"
import { WelcomeService } from "./user-info.service";
import { DatabaseService } from "./database.service";

@Component({
    selector:'app-home-layout',
    templateUrl: 'home-layout.component.html',

})
export class HomeLayoutComponent{

    welcomecards : Welcome[] = [];

   
    constructor(private welcomeService: WelcomeService, private dbService:DatabaseService) { 
      dbService.showData();
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