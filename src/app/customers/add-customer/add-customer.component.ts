import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CustomerService} from '../customer.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  private apiServerUrl = environment.apiBaseUrl;

  i = 0;

  constructor(private service: CustomerService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm){
    if (form.invalid){
      return;
    }
    let newcustomer = {customerid: this.i++,
      firstName: form.value.firstname,
      lastName: form.value.lastname,
      email: form.value.email,
      password: form.value.password,
      phoneNumber: form.value.phone,
    location: {
        address: form.value.address,
        city: form.value.city,
        state: form.value.state,
        zip: form.value.zip
    }
    }

    this.service.addCustomer(newcustomer);
  

    form.resetForm();
  }
}
