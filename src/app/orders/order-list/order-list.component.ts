import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  orderService:OrderService;
  editVisible:boolean = false;
  customerId : number = 0;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  ngOnInit(): any {
    this.getAllOrders();
    this.getOrdersByCustomer(this.customerId);
  }

  getAllOrders() {
    this.orderService.getOrders().then(order => this.orders = order.content);
  }


  toggleViewCustomerOrders() {
    this.editVisible = !this.editVisible;
  }

  getOrdersByCustomer(customerId:number){
    this.orderService.getOrdersByCustomerService(customerId).then(order => this.orders = order.content);
  }

}
