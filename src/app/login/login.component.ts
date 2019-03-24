import { Component, OnInit, Inject } from '@angular/core';
import { Registration } from '../registration';
import { ProfilesService } from '../profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailAddress: string ;
  password: string;
  showRegistrationForm = false;

  registration: Registration = new Registration()

  constructor(private profileService: ProfilesService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log("Login handler invoked");
    console.log("Email Address: " + this.emailAddress + ", Password: " + this.password);
    this.profileService.login(this.emailAddress, this.password)
      .subscribe( (s) => {
        console.log(s);
        this.router.navigateByUrl("/menu");
      });
  }

  onRegister() {
    this.showRegistrationForm = true;
    console.log("Register handler invoked");
  }

  onReset() {
    this.emailAddress = "";
    this.password = "";
    console.log("Reset handler invoked");
  }

  onRegisterSuccess() {
    var me = this;
    this.registration.name = this.registration.firstName + " " + this.registration.lastName;
    this.profileService.createProfile(this.registration)
      .subscribe( (s) => {
          me.showRegistrationForm = !me.showRegistrationForm;
          me.registration = new Registration();
          me.router.navigateByUrl("");
      });
  }

  onRegisterCancel() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }

}
