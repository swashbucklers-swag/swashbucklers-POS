import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL, CurrentEmployee} from '../models/globalConstants';
import { JSONWebToken } from '../models/JSONWebToken';
import {Employee} from '../common/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  //todo swap with aws url once backend api is hosted
  url:string = "/login/login";

  constructor(private http:HttpClient) {}

  authenticate(email:string, password:string):Promise<boolean> {

    let fullUrl = BASE_API_URL.concat(this.url)

    return this.http.post<JSONWebToken>(fullUrl, {'username': email, 'password': password}).toPromise().then(data => {
      CurrentEmployee.currentJWT = data.jwt;
      CurrentEmployee.employeeLoggedIn.next(data.employee);
      return true;

    }).catch(exception => {
      console.log(exception);
      return false;
    })
  }
}
