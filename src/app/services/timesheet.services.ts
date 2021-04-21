import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import {Timesheet} from "../common/timesheet";
import { Login } from "../common/login";

@Injectable({ providedIn: "root" })
export class TimesheetServices{

 // private headerInfo: HttpHeaders;


  constructor(private http: HttpClient, private router: Router){


  }

  clockIn(email: string, password: string){
    let login = new Login();
    login.email = email;
    login.password = password;
    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer '.concat("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MDIyMjM3LCJleHAiOjE2MTkwNTgyMzd9.xHHng6k96VMPK0HyAJnTg8Rz5XXECrN69klnsw87EjU"),
    };

    this.http.post<{message: string}>("http:localhost:9090/employee/clock/out",login,{headers:headerInfo})
      .subscribe((responseData) =>{
        console.log(responseData);
      })
  }

}
