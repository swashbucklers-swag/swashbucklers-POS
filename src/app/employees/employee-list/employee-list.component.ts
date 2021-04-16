import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  employee: Employee;


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.listEmployees();
  }


  listEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      data => {
        this.employees = data;
      }
    )
  }
  oneEmployee() {
    this.employeeService.getOneEmployee().subscribe(
      data => {
        this.employee = data;
      }
    )
  }

}
