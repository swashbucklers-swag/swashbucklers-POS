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

  saveInfo(){
    this.customerService.editCustomerInfo(this.customer);
    this.toggleEditInfo();
    alert('Customer info saved succesfully');
  }
}
