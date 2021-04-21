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

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  ngOnInit(): any {
    this.orderService.getOrders().then(order => this.orders = order.content);
  }
}
