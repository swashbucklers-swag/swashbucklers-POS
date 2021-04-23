import { Component, OnInit } from '@angular/core';
import { Employee } from '../common/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees: Employee[];
  public editEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.employees);
    this.listEmployees();

  }

  listEmployees(): void {
    this.employeeService.getEmployeeList().then(
      (response) => {
        this.employees = response.content;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEmployee(newHire: Employee): void {
    this.employeeService.addEmployee(newHire).subscribe(
      (response: Employee) => {
        console.log(response);
        this.listEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openModal(modal: string): void {
    const container = document.getElementById('main-spot');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    switch (modal){
      case 'Add':
        button.setAttribute('data-bs-target', '#AddEmployee');
        break;
      case 'Edit':
        button.setAttribute('data-bs-target', '#EditEmployee');
        break;
    }
    container.appendChild(button);
    button.click();
  }



}
