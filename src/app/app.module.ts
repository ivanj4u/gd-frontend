import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./shared/login/login.component";
import {RegisterComponent} from "./shared/register/register.component";
import {IndexComponent} from "./shared/index/index.component";

const myRouter : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : '**', component : IndexComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
