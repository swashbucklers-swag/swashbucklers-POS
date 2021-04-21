import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{Customer} from './customer';
import{CustomerService} from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  headers = ["First Name", "Last Name", "Email", "Phone"];

  constructor(private service: CustomerService) {
   }

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers(): void {
    this.service.getCustomers().subscribe(
      response => {
        this.customers = response.content;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}