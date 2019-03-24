import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private profileService: ProfilesService, private router: Router) { }

  ngOnInit() {
    this.profileService.logOut().subscribe((success) => {
      this.router.navigateByUrl("");
    }, (error) => {
      console.log(error);
    })
  }

}
