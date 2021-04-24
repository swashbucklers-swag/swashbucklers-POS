import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order:Order[];
  orderService:OrderService;
  isLoading:boolean = true;

  pageSizeOptions:number[] = [5, 10, 25, 50, 100];

  //pagination information
  pageNumber:number = 0;
  pageSize:number = 25;
  totalPages:number;
  totalElements:number;

  constructor(orderService:OrderService) {
    this.orderService = orderService;
  }

  ngOnInit(): void {
    this.refreshOrders()
  }

  setPageSize(event: any){
    this.pageSize = parseInt(event.target.value, 10);
  }

  setPagination(){
    this.refreshOrders();
  }

  pageFirst(){
    this.pageNumber = 0;
    this.refreshOrders();
  }

  pageLast(){
    this.pageNumber = (this.totalPages - 1);
    this.refreshOrders();
  }

  pageNext(){
    if(this.pageNumber != (this.totalPages - 1)){
      this.pageNumber++;
      this.refreshOrders();
    }
  }

  pagePrevious(){
    if(this.pageNumber != 0){
      this.pageNumber--;
      this.refreshOrders();
    }
  }

  async refreshOrders(){
    this.isLoading = true;
    try {
      await this.orderService.getOrders(this.pageSize, this.pageNumber).then(ord => {
        this.order = ord.content;
        this.pageNumber = ord.pageable.pageNumber;
        this.pageSize = ord.pageable.pageSize;
        this.totalPages = ord.totalPages;
        this.totalElements = ord.totalElements;
      });
    } catch (exception){
      alert("Failed to load orders!\n\nIf this issue persists, contact your system administrator.")
    }
    this.isLoading = false;
  }

}
