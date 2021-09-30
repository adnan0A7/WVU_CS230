export class Welcome{
    icon: string;
    title: String;
    button: String;
    link: String;



    constructor({icon, title,button, link}:
        
        {icon:string, title:string, button: string, link: string}){
            this.icon = icon;
            this.title = title;
            this.button = button;
            this.link = link;

               }
}