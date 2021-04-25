import { Component, OnInit } from '@angular/core';
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
  public editingEmployee: Employee;
  public isLoading = true;

  public pageInfo: any;
  public currentPage: number;
  public totalPages: number;
  public first: boolean;
  public last: boolean;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.listEmployees();
  }

  changePage(p: string): void {
    let i = 0;
    switch (p){
      case 'first':
        i = 0;
        break;
      case 'previous':
        i = this.currentPage - 1;
        break;
      case 'next':
        i = this.currentPage + 1;
        break;
      case 'last':
        i = this.totalPages - 1;
    }
    this.employeeService.page = i.toString();
    this.listEmployees();
  }

  changeItemPerPage(ipp: string): void {
    this.employeeService.itemsPerPage = ipp;
    this.listEmployees();
  }


  async listEmployees(): Promise<void> {
    console.log(localStorage.swagjwt);
    try {
      await this.employeeService.getEmployeeList().then(
        (response) => {
          this.employees = response.content;
          this.pageInfo = response.pageable;
          this.currentPage = response.number;
          this.totalPages = response.totalPages;
          this.first = response.first;
          this.last = response.last;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    } catch (exception) {
      alert('Failed to load employees');
    }
    this.isLoading = false;
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

  updateEmployee(editEmployee: Employee): void {
    this.employeeService.updateEmployee(editEmployee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.listEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openModal(modalEmployee: Employee, modal: string): void {
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
        this.editingEmployee = modalEmployee;
        button.setAttribute('data-bs-target', '#EditEmployee');
        break;
    }
    container.appendChild(button);
    button.click();
    container.removeChild(button);
  }
}
