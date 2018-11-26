import { Component, OnInit, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'p2pdinner-ui';
  showNavigation: boolean = false;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {

  }
  ngOnInit() {
    if (this.storage.get("profile") !== undefined && this.storage.get("profile") !== null) {
      this.showNavigation = true;
    }
  }

}
