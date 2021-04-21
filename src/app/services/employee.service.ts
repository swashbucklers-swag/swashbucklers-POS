import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  // let Auth: HttpHeaders = new HttpHeaders;

  //   Auth.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE4OTUwNDMwLCJleHAiOjE2MTg5ODY0MzB9.edZ_27t3UIp65UIYDEm3X1Vv1K6n8quxBR-D1UOvd2Q");


  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiServerUrl}/employee/all`,
    {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE4OTg2OTQ1LCJleHAiOjE2MTkwMjI5NDV9._ithQx0Mjr9FOC65HT5mKdiZ_pocWlaohsFfgzNg4-0"}});

  }

  // return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
  //   map(response => response.content.employees)
  // );

  // getOneEmployee(): Observable<Employee> {
  //   return this.httpClient.get<GetResponse>(this.newUrl).pipe(
  //     map(response => response.content.employee)
  //   );
  // }
}

// interface GetResponse {
//   content: {
//     employees: Employee[];
//     // employee: Employee;
//   }
// }
