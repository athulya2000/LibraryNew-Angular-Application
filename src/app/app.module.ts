import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationLoginComponent } from './administration-login/administration-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:AdministrationLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdministrationLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
