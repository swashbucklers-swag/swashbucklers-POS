import { Component, OnInit } from '@angular/core';
import{Customer} from '../models/customer';
import{CustomerService} from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  isLoading:boolean = true;

  pageSizeOptions:number[] = [5, 10, 25, 50, 100]

//pagination information
pageNumber:number = 0;
pageSize:number = 25;
totalPages:number;
totalElements:number;

  constructor(private service: CustomerService, private router: Router) {
}

  ngOnInit(): void {
    this.refreshCustomers();
  }
  onClickAdd(): void {
    this.router.navigate(['/customers/add']);
  }
  setPageSize(event: any){
    this.pageSize = parseInt(event.target.value, 10);
  }

  setPagination(){
    this.refreshCustomers();
  }

  pageFirst(){
    this.pageNumber = 0;
    this.refreshCustomers();
  }

  pageLast(){
    this.pageNumber = (this.totalPages - 1);
    this.refreshCustomers();
  }

  pageNext(){
    if(this.pageNumber != (this.totalPages - 1)){
      this.pageNumber++;
      this.refreshCustomers();
    }
  }

  pagePrevious(){
    if(this.pageNumber != 0){
      this.pageNumber--;
      this.refreshCustomers();
    }
  }

  async refreshCustomers(){
    this.isLoading = true;
    try {
      await this.service.getCustomers(this.pageSize, this.pageNumber).then(cust => {
        this.customers = cust.content;
        this.pageNumber = cust.pageable.pageNumber;
        this.pageSize = 25;
        this.totalPages = cust.totalPages;
        this.totalElements = cust.totalElements;
      });
    } catch (exception){
      alert("Failed to load Customer!\n\nIf this issue persists, contact your system administrator.")
    }
    this.isLoading = false;
  }
}
