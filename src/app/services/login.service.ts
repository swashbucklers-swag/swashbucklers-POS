import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL, CurrentEmployee} from '../models/globalConstants';
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
      localStorage.setItem('swagjwt', data.jwt);
      localStorage.setItem('swagEmpName',data.employee.firstName + " " + data.employee.lastName);
      CurrentEmployee.employeeLoggedIn.next(localStorage.getItem('swagEmpName'));
      return true;

    }).catch(exception => {
      console.log(exception);
      return false;
    })
  }
}
