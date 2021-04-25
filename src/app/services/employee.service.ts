import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment} from 'src/environments/environment';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = localStorage.getItem("swagjwt");
  private token = localStorage.getItem('swagjwt');

  public page = '0';
  public itemsPerPage = '5';


  constructor(private httpClient: HttpClient) { }


  getEmployeeList(): Promise<any> {

    console.log(this.token);

    return this.httpClient.get(`${this.apiServerUrl}/employee/all/`,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}, params: {page: this.page, offset: this.itemsPerPage }}).toPromise();
  }

  addEmployee(value: any): Observable<any> {
    return this.httpClient.post(`${this.apiServerUrl}/employee/create`,
      value,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}});
  }

  updateEmployee(value: any): Observable<any> {
    return this.httpClient.put(`${this.apiServerUrl}/employee/update`,
      value,
      {headers: {Authorization: 'Bearer '.concat(`${this.token}`)}});
  }



}


