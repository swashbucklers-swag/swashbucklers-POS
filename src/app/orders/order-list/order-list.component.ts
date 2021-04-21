import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/common/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): any {
    this.listOrders();
  }

  listOrders(): void {
    this.orderService.getOrders().subscribe(
      response => {
        this.orders = response.content;
      }
    )
  }
}
