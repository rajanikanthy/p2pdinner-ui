import { Component, OnInit, Inject } from '@angular/core';
import { UserProfile } from '../UserProfile';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  userProfile : UserProfile

  constructor(private profileService: ProfilesService) { 

  }

  ngOnInit() {
    this.profileService.getProfileById()
      .subscribe( profile => this.userProfile = profile)
  }

}
