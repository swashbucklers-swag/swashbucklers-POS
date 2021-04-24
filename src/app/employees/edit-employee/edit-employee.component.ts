import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../common/employee';
import {EmployeesComponent} from '../employees.component';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() editEmployee: Employee;

  constructor(public boss: EmployeesComponent) {}


  ngOnInit(): void {
  }

  updateEmployee(employee: Employee): void {
    this.boss.updateEmployee(employee);
  }
}
