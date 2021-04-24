import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() order:Order;
  editVisible:boolean = false;

  orderService:OrderService;
  customerId : number = 0;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  ngOnInit(): any {
    this.getAllOrders();
    // this.getOrdersByCustomer(this.customerId);
  }

  getAllOrders() {

    this.orderService.getOrders().then(order => this.order = order.content);
  }


  toggleEditInfo() {
    this.editVisible = !this.editVisible;
  }

  // getOrdersByCustomer(customerId:number){
  //   this.orderService.getOrdersByCustomerService(customerId).then(order => this.orders = order.content);
  // }

  // processResult() {
    // return order => {
    //   this.orders = order.content;
    //   this.page.pageSize = order.content.pageable.pageSize;
    //   this.page.totalPages = order.content.pageable.totalPages;
    //   this.page.totalElements = order.content.totalElements;
    //   this.page.pageNumber = order.content.number + 1;
    // }
  // }

}
