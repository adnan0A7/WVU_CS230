export class Welcome{
    icon: String;
    title: String;
    button: String;
    link: String;
    color: String;
    bcolor: String;



    constructor({icon, title,button, link, color,bcolor}:
        
        {icon:String, title:String, button: String, link: String, color: String, bcolor:String}){
            this.icon = icon;
            this.title = title;
            this.button = button;
            this.link = link;
            this.color = color;
            this.bcolor = bcolor;

               }
}