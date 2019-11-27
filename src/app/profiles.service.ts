import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Observable, Subject } from 'rxjs';
import { Registration } from './registration';
import { UserProfile } from './UserProfile';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  baseUri: string = "http://localhost:8080/p2pdinner-profile-services/api/profiles"

  logoutEvent = new Subject();
  loginEvent = new Subject();

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  isValidSession() {
    return this.storage.get("profile") !== null;
  }

  logOut() {
    let me = this
    return new Observable((observer) => {
      me.storage.remove("profile")
      this.logoutEvent.next(false)
      observer.next(true)
    })
  }

  login(emailAddress: string, password: string): Observable<UserProfile> {
    return new Observable((observer) => {
      this.getProfile(emailAddress, password)
      .subscribe( (success) => {
        this.storage.set("profile", success);
        this.loginEvent.next(true);
        observer.next(success)
      }, (error) => {
        console.log(error)
        observer.error(error)
      })
    })
  }

  getProfileFromCache() : Observable<UserProfile> {
    return new Observable((observer) => {
      observer.next(this.storage.get("profile"))
    })
  }

  getProfile(emailAddress: string, password: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.baseUri + "/validate", {
      params : {
        "emailAddress": emailAddress,
        "password": password
      }
    })
  }

  getProfileById() : Observable<UserProfile> {
    let userProfile : UserProfile = this.storage.get("profile");
    return Observable.create(function(observer) {
      observer.next(userProfile);
      observer.complete();
    })
  }

  createProfile(registration: Registration): Observable<string> {
    return this.http.post<string>(this.baseUri, registration);
  }
}
