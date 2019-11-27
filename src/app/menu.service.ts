import { Injectable, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Subject, Observable } from 'rxjs';
import { MenuItem } from './menuItem';
import { UserProfile } from './UserProfile';
import { DinnerCategory} from './DinnerCategory';
import { DeliveryType } from './DeliveryType';
import { SpecialNeed } from './SpecialNeed';
import { Profile } from 'selenium-webdriver/firefox';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUri: string = "http://localhost:8080/p2pdinner-menu-services/api"

  createMenuItemEvent : Subject<MenuItem> = new Subject()
  deleteMenuItemEvent : Subject<MenuItem> = new Subject()

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  getMenuItems() : Observable<MenuItem[]> {
    let profile: UserProfile = this.storage.get("profile");
    return this.http.get<MenuItem[]>(this.baseUri + "/" + profile.profileId + "/menuitem");
  }

  createMenuItem(menu: MenuItem) {
    let profile : UserProfile = this.storage.get("profile")
    return this.http.post(this.baseUri + "/" + profile.profileId + "/menuitem", menu);
  }

  getCategories() : Observable<DinnerCategory[]> {
    return this.http.get<DinnerCategory[]>(this.baseUri + "/categories");
  }

  getDeliveryTypes() : Observable<DeliveryType[]> {
    return this.http.get<DeliveryType[]>(this.baseUri + "/deliveryTypes");
  }

  getSpeicalNeeds() : Observable<SpecialNeed[]> {
    return this.http.get<SpecialNeed[]>(this.baseUri + "/specialNeeds");
  }

  deleteMenuItem(id: String) {
    let profile : UserProfile = this.storage.get("profile")
    return this.http.delete(this.baseUri + "/" + profile.profileId + "/menuitem/" + id);
  }

}
