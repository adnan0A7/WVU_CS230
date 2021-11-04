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