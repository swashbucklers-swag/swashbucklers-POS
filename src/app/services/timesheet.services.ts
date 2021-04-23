import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Login } from "../common/login";
import { BASE_API_URL, CurrentEmployee } from "../models/globalConstants";


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

    return await this.http.post(BASE_API_URL+"/employee/clock/"+type,login,{headers:headerInfo}).toPromise()
  }

  async getTimesheets(page: number, offset: number, sortby: string, order: string): Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer '.concat("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MTkwNDIxLCJleHAiOjE2MTkyMjY0MjF9.2Yg0siNEIsUezVZNzS3bi1gM1H46V-aRGYUtht6oGTk")
    };
    let optParams: string = "";

    if(sortby || order || offset || page){
      optParams="?"+ (sortby+"&" ? sortby : "") + (order+"&" ? order : "") +
      (offset+"&" ? offset : "") + (page+"&" ? page : "");

      optParams = optParams.substring(0,optParams.length);
    }

    return await this.http.get(BASE_API_URL+"/employee/clock/all"+optParams,{headers:headerInfo}).toPromise();
  }


}
