import { Component, OnInit, Input } from '@angular/core';
import {CustomerService} from '../customer.service';
import { Customer } from '../customer';
import { STATES } from '../state';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer:Customer;
  editVisible:boolean = false;

  private states: any[] = STATES;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  toggleEditInfo(){
    this.editVisible = !this.editVisible;
  }

  isValidCustomer(c: Customer): boolean {
    if (c.firstName.length < 1) {
      return false;
    }
    if (c.lastName.length < 1) {
      return false;
    }
    if (c.email.length < 1) {
      return false;
    }
    if (c.phoneNumber.length != 10) {
      return false;
    }
    if (c.location.address.length < 1) {
      return false;
    }
    if (c.location.city.length < 1) {
      return false;
    }
    if (c.location.zip.length !=5) {
      return false;
    }
    return true;
  }

  saveInfo(){
    if (!this.isValidCustomer(this.customer)){
      alert('Invalid data submitted');
      return;
    }
    this.customerService.editCustomerInfo(this.customer);
    this.toggleEditInfo();
    alert('Customer info saved succesfully');
  }
}
