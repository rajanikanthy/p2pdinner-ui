import { Component, OnInit, Inject, OnChanges, DoCheck } from '@angular/core';
import { ProfilesService } from './profiles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  title = 'p2pdinner-ui';
  showNavigation: boolean = false;

  constructor(private profileService: ProfilesService) {

  }
  
  ngOnInit() {
    this.showNavigation = this.profileService.isValidSession()
    this.profileService.logoutEvent.subscribe( (success) => {
      this.showNavigation = false;
    });
    this.profileService.loginEvent.subscribe((success) => {
      this.showNavigation = true;
    })
  }

  ngOnChanges() {
    console.log("On Changes")
    this.showNavigation = this.profileService.isValidSession()
  }

  ngDoCheck() {
    this.showNavigation = this.profileService.isValidSession()
  }

}
