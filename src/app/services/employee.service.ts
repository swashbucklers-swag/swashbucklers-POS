import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9009/employee/all';
  private newUrl = 'http://localhost:9009/employee/email?email=cami4@mail.com';

  constructor(private httpClient: HttpClient) { }


  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.content.employees)
    );
  }

  getOneEmployee(): Observable<Employee> {
    return this.httpClient.get<GetResponse>(this.newUrl).pipe(
      map(response => response.content.employee)
    );
  }
}

interface GetResponse {
  content: {
    employees: Employee[];
    employee: Employee;
  }
}
