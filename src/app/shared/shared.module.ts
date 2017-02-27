import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from "@angular/router";
import { ForgetComponent } from './forget/forget.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth-service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent],
  exports: [
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
