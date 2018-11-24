import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailAddress: string = "example@safeway.com";
  password: string;
  showRegistrationForm = false;

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    console.log("Login handler invoked");
    console.log("Email Address: " + this.emailAddress);
  }

  onRegister() {
    this.showRegistrationForm = true;
    console.log("Register handler invoked");
  }

  onReset() {
    console.log("Reset handler invoked");
  }

  onRegisterSuccess() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }

  onRegisterCancel() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }

}
