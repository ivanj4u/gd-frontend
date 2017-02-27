import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username : string;
  password : string;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }

  doLogin() {
    console.log("Username : " + this.username);
    console.log("Password : " + this.password);

    if (this.auth.login(this.username, this.password)) {
      console.log("Login Sukses");
      this.router.navigate(["/"]);
    } else {
      console.log("Login Gagal");
    }
  }
}
