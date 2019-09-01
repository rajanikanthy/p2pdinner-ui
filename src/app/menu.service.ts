import { Injectable, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Subject, Observable } from 'rxjs';
import { Menu } from './menu';
import { UserProfile } from './UserProfile';
import { DinnerCategory} from './DinnerCategory';
import { DeliveryType } from './DeliveryType';
import { SpecialNeed } from './SpecialNeed';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUri: string = "http://localhost:8080/p2pdinner-menu-services/api"

  createMenuItemEvent : Subject<Menu> = new Subject()
  deleteMenuItemEvent : Subject<Menu> = new Subject()

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  getMenuItems() : Observable<Menu[]> {
    let profile: UserProfile = this.storage.get("profile");
    return this.http.get<Menu[]>(this.baseUri + "/" + profile.profileId + "/menuitem");
  }

  createMenuItem(menu: Menu) {
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

}
