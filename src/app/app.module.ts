import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { PricingComponent } from './pricing/pricing.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LayoutComponent } from './layout/layout.component';
import { LogInComponent } from './log-in/log-in.component';
import { TeamsComponent } from './teams/teams.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { BasicSubscribtionComponent } from './basic-subscribtion/basic-subscribtion.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    HeroComponent, 
    PricingComponent,
    CarouselComponent,
    LayoutComponent, 
    SignUpComponent,
    LogInComponent, 
    TeamsComponent,
    BasicSubscribtionComponent,
    HomeLayoutComponent,
    WelcomeComponent,
    UserInfoComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
