import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment} from 'src/environments/environment';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;
  private token = environment.JWT;

  constructor(private httpClient: HttpClient) { }


  getEmployeeList(): Promise<any> {
    return this.httpClient.get(`${this.apiServerUrl}/employee/all`,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}}).toPromise();
  }

  addEmployee(value: any): Observable<any> {
    return this.httpClient.post(`${this.apiServerUrl}/employee/create`,
      value,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}});
  }

  updateEmployee(value: any): Promise<any> {
    return this.httpClient.put(`${this.apiServerUrl}/employee/update`,
      value,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}}).toPromise();
  }



}


