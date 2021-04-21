import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL, JWT} from '../../environments/environment';
import { JSONWebToken } from '../models/JSONWebToken';

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
      JWT.currentJWT = data.jwt;
      console.log(JWT.currentJWT);
      return true;

    }).catch(exception => {
      console.log(exception);
      return false;
    })
  }
}