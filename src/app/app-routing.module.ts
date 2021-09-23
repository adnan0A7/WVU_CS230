import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicSubscribtionComponent } from './basic-subscribtion/basic-subscribtion.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'home', component: HomeLayoutComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'basic-subscribtion', component: BasicSubscribtionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
