import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../common/employee';
import {EmployeesComponent} from '../employees.component';


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
    console.log(employee);
    const filterInfo: any = {
      eployeeId: employee.employeeId,

    };

    this.boss.updateEmployee(employee);
  }
}
