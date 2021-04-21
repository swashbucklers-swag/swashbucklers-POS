import { Component, OnInit } from '@angular/core';
import { Employees } from './mock-employees';
import { Employee } from '../common/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees: Employee[];

  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.employees);
    this.listEmployees();
    
  }

  listEmployees(): void {
    this.employeeService.getEmployeeList().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
