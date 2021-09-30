import { Component, Input } from "@angular/core";

@Component({
    selector:'app-welcome',
    templateUrl: 'welcome.component.html',

})
export class WelcomeComponent{
@Input()
    icon! : string;
    @Input()
    title! : string ;
    @Input()
    button! : string;
    @Input()
    link! : string;
}