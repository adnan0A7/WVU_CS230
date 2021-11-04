import { Injectable } from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { Welcome } from "./welcome.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<Welcome []>;
    constructor(private db:AngularFireDatabase){
        console.log("Sitting up Firebase communication");
        this.items = this.db.list<Welcome>('itemsList').valueChanges();
    }
    public showData() {
        this.items.subscribe((data: Welcome[]) =>{
            console.log("data recieved");
            for(let item of data){
                console.log(data);
            }
            
        })
    }
}