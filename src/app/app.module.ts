import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { PricingComponent } from './pricing/pricing.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    HeroComponent, 
    PricingComponent,
    CarouselComponent,
    LayoutComponent 

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
