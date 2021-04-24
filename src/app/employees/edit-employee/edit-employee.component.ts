import { Component, OnInit } from '@angular/core';
import {Employee} from '../../common/employee';
import {EmployeesComponent} from '../employees.component';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployee: Employee;

  constructor(public boss: EmployeesComponent) {}


  ngOnInit(): void {
  }

  updateEmployee(employee: Employee): void {
    alert('Why you tryin ta edit ' + this.editEmployee.firstName + ' ' + this.editEmployee.lastName);
  }
}
