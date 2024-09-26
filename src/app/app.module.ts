import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { WhyusComponent } from './whyus/whyus.component';
import { TeamComponent } from './team/team.component';
import { CustomerComponent } from './customer/customer.component';
import { FooterComponent } from './footer/footer.component';
import { PrevDirective } from './customer/prev.directive';
import { NextDirective } from './customer/next.directive';

const appRoute:Routes=[
  {path:'',component:HomeComponent},
  {path:'HOME',component:HomeComponent},
  {path:'ABOUT',component:AboutComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    WhyusComponent,
    TeamComponent,
    CustomerComponent,
    FooterComponent,
    PrevDirective,
    NextDirective
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
