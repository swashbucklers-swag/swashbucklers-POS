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


  getEmployeeList(): Promise<any> {
    return this.httpClient.get(`${this.apiServerUrl}/employee/all`,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}}).toPromise();
  }

  addEmployee(value: any): Observable<any> {
    return this.httpClient.get(`${this.apiServerUrl}/employee/create`,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}});
  }

  updateEmployee(): Promise<any> {
    return this.httpClient.get(`${this.apiServerUrl}/employee/update`,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}}).toPromise();
  }

  deleteEmployee(): Promise<any> {
    return this.httpClient.get(`${this.apiServerUrl}/employee/delete`,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}}).toPromise();
  }

}


