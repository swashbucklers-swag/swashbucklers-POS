import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Order } from 'src/app/models/order';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() order:Order;
  editVisible:boolean = false;
  customerId : number = 0;

  constructor(private orderService: OrderService, private customerService:CustomerService) {
    this.orderService = orderService;
  }

  ngOnInit(): void {
  }

  getAllOrders() {

    this.orderService.getOrders().then(order => this.order = order.content);
  }

  toggleEditInfo() {
    this.editVisible = !this.editVisible;
  }

  getOneCustomer(phoneNumber:string) {
    let customer: Promise<Customer> = this.customerService.getCustomerByPhoneNumber(phoneNumber);
    return customer;
  }

}
