import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  orderService:OrderService;
  editVisible:boolean = false;
  customerId : number = 0;

  page : {
    pageNumber: number;
    pageOffeset: number;
    sortBy: string;
    order: string;
  }

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

  getAllOrdersPagination() {

    this.orderService.getOrdersPaginate(this.page.pageNumber-1, this.page.pageOffeset, this.page.sortBy, this.page.order).then(order => this.orders = order.content);
  }


  toggleViewCustomerOrders() {
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
