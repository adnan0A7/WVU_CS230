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

export class SignUp{
    DisplayName: string;
    Email: String;
    Password: String;



    constructor({DisplayName, Email,Password}:
        
        {DisplayName:string, Email:string, Password: string}){
        this.DisplayName = DisplayName;
        this.Email = Email;
        this.Password = Password;

               }
}