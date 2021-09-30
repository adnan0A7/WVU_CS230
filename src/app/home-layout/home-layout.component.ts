import { Component } from "@angular/core";
import { mock_card } from "../welcome/mock-welcome";
import { Welcome } from "../welcome/welocme.model";

@Component({
    selector:'app-home-layout',
    templateUrl: 'home-layout.component.html',

})
export class HomeLayoutComponent{

    welcomecards : Welcome[] = [];

    constructor(){

        for( var welcome of mock_card)

        this.welcomecards.push(new Welcome(welcome) );

    }
}