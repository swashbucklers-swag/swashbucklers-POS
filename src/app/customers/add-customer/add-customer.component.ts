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

  states: any[] = [
    {statename : 'AK'},
    {statename : 'AL'},
    {statename : 'AR'},
    {statename : 'AZ'},
    {statename : 'CA'},
    {statename : 'CO'},
    {statename : 'CT'},
    {statename : 'DC'},
    {statename : 'DE'},
    {statename : 'FL'},
    {statename : 'GA'},
    {statename : 'HI'},
    {statename : 'IA'},
    {statename : 'ID'},
    {statename : 'IL'},
    {statename : 'IN'},
    {
    statename : 'KS'},
    {
    statename : 'KY'},
    {
    statename : 'LA'},
    {
    statename : 'MA'},
    {
    statename : 'MD'},
    {
    statename : 'ME'},
    {
    statename : 'MI'},
    {
    statename : 'MN'},
    {
    statename : 'MO'},
    {
    statename : 'MS'},
    {
    statename : 'MT'},
    {
    statename : 'NC'},
    {
    statename : 'ND'},
    {
    statename : 'NE'},
    {
    statename : 'NH'},
    {
    statename : 'NJ'},
    {
    statename : 'NM'},
    {
    statename : 'NV'},
    {
    statename : 'NY'},
    {
    statename : 'OH'},
    {
    statename : 'OK'},
    {
    statename : 'OR'},
    {
    statename : 'PA'},
    {
    statename : 'RI'},
    {
    statename : 'SC'},
    {
    statename : 'SD'},
    {
    statename : 'TN'},
    {
    statename : 'TX'},
    {
    statename : 'UT'},
    {
    statename : 'VA'},
    {
    statename : 'VT'},
    {
    statename : 'WA'},
    {
    statename : 'WI'},
    {
    statename : 'WV'},
    {
    statename : 'WY'},
];

selectedState: string;

  constructor(private service: CustomerService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm){
    if (form.invalid){
      return;
    }
    let newcustomer = {customerId: this.i++,
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
