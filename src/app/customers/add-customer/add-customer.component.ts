import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {STATES} from "../state"

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent implements OnInit {

  i = 0;

states: any[] = STATES;

selectedState: string;

  constructor(private service: CustomerService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm){
    if (form.invalid){
      alert('Invalid data submitted');
      return;
    }
    let newcustomer = {customerId: this.i++,
      firstName: form.value.firstname,
      lastName: form.value.lastname,
      email: form.value.email,
      password: form.value.password,
      phoneNumber: form.value.phone,
    location: {
        locationId: 0,
        address: form.value.address,
        city: form.value.city,
        state: form.value.state,
        zip: form.value.zip
    }
    }
    this.service.addCustomer(newcustomer);
    form.resetForm();
    alert('Customer created');
  }
  onClickBack(): void {
    this.router.navigate(['/customers']);
  }
}
