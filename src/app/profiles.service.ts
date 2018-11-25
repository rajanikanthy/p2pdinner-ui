import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Observable, Subject } from 'rxjs';
import { Registration } from './registration';
import { UserProfile } from './UserProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  baseUri: string = "http://localhost:8080/p2pdinner-profile-services/api/profiles"

  constructor(private http: HttpClient) {
    
  }

  getProfile(emailAddress: string, password: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.baseUri + "/validate", {
      params : {
        "emailAddress": emailAddress,
        "password": password
      }
    });
  }

  createProfile(registration: Registration): Observable<string> {
    return this.http.post<string>(this.baseUri, registration);
  }
}
