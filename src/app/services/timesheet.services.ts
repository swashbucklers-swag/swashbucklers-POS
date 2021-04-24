import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "../common/login";
import { BASE_API_URL } from "../models/globalConstants";
import { DatePipe } from "@angular/common";


@Injectable({ providedIn: "root" })
export class TimesheetServices{

  constructor(private http: HttpClient, private datePipe: DatePipe){ }

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
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };
    let optParams: string = "";

    if(sortby || order || offset || page){
      optParams="?"+ (sortby+"&" ? sortby : "") + (order+"&" ? order : "") +
      (offset+"&" ? offset : "") + (page+"&" ? page : "");

      optParams = optParams.substring(0,optParams.length);
    }

    return await this.http.get(BASE_API_URL+"/employee/clock/all"+optParams,{headers:headerInfo}).toPromise();
  }

  async updateTimesheet(timesheetId: number, newClockIn: string, newClockOut: string){
    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };

    newClockIn = this.datePipe.transform(new Date(newClockIn),'yyyy-MM-dd hh:mm:ss' );
    newClockOut = this.datePipe.transform(new Date(newClockOut),'yyyy-MM-dd hh:mm:ss' );


    return await this.http.put(BASE_API_URL+"/employee/clock/update",{timesheetId:timesheetId,clockIn: newClockIn, clockOut: newClockOut},{headers:headerInfo}).toPromise();
  }


}
