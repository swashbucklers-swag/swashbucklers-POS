import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment, JWT } from 'src/environments/environment';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;
  private token = JWT.currentJWT;

  constructor(private httpClient: HttpClient) { }

  // let Auth: HttpHeaders = new HttpHeaders;

  //   Auth.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE4OTUwNDMwLCJleHAiOjE2MTg5ODY0MzB9.edZ_27t3UIp65UIYDEm3X1Vv1K6n8quxBR-D1UOvd2Q");


  getEmployeeList(): Promise<any> {
    return this.httpClient.get(`${this.apiServerUrl}/employee/all`, {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}}).toPromise();

  }


}


