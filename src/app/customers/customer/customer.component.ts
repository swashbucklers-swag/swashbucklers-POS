import { Component, OnInit, Input } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import { Customer } from './customer';
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

  isEmail(search:string):boolean
  {
      let  serchfind:boolean;

      let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      serchfind = regexp.test(search);

      return serchfind;
  }

  isValidCustomer(c: Customer): boolean {
    if (c.firstName.length < 1) {
      alert('Invalid first name');
      return false;
    }
    if (c.lastName.length < 1) {
      alert('Invalid last name');
      return false;
    } 
    if (!this.isEmail(c.email)) {
      alert('Invalid email');
      return false;
    }
    if (c.phoneNumber.length != 10) {
      alert('Invalid phone number');
      return false;
    }
    if (c.location.address.length < 1) {
      alert('Invalid address');
      return false;
    }
    if (c.location.city.length < 1) {
      alert('Invalid city');
      return false;
    }
    if (c.location.zip.length !=5) {
      alert('Invalid zip code');
      return false;
    }
    return true;
  }

  saveInfo(){
    if (!this.isValidCustomer(this.customer)){
      return;
    }
    this.customerService.editCustomerInfo(this.customer);
    this.toggleEditInfo();
    alert('Customer info saved succesfully');
  }
}
