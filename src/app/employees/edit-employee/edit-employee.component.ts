import { Component, OnInit } from '@angular/core';
import {Employee} from '../../common/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployee: Employee;

  constructor() {}


  ngOnInit(): void {
  }

  updateEmployee(employee: Employee) {

  }
}
