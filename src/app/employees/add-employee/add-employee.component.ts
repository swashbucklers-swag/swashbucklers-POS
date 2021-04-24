import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Employee} from '../../common/employee';
import {EmployeeService} from '../../services/employee.service';
import { EmployeesComponent } from '../employees.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private boss: EmployeesComponent) { }

  ngOnInit(): void {
  }



  addEmployee(addForm: NgForm): void {
    if (addForm.invalid){
      return;
    }
    const newEmployee: Employee = {
      employeeId: 0,
      firstName: addForm.value.firstName,
      lastName: addForm.value.lastName,
      email: addForm.value.email,
      password: addForm.value.password,
      phoneNumber: addForm.value.phoneNumber,
      location: {
        locationId: 0,
        address: addForm.value.address,
        city: addForm.value.city,
        state: addForm.value.state,
        zip: addForm.value.zip
      },
      rank: addForm.value.rank
    };
    // addForm.resetForm();
    console.log(newEmployee);
    this.boss.addEmployee(newEmployee);
    addForm.resetForm();

  }
}
