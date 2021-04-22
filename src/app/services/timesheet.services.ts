import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Login } from "../common/login";
import { BASE_API_URL } from "../models/globalConstants";


@Injectable({ providedIn: "root" })
export class TimesheetServices{

  constructor(private http: HttpClient, private router: Router){ }

  async clockIn(email: string, password: string, type : string): Promise<any>{
    let login = new Login();
    login.email = email;
    login.password = password;
    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'Access-Control-Allow-Headers': 'Content-Type',
      //'Authorization': 'Bearer '.concat(JWT.currentJWT)
    };

    await this.http.post(BASE_API_URL+"/employee/clock/"+type,login,{headers:headerInfo}).toPromise()
  }
}
