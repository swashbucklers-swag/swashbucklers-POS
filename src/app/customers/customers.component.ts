import { HttpErrorResponse } from '@angular/common/http';
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

  constructor(private service: CustomerService, private router: Router) {
}

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers(): void {
    this.service.getCustomers().then(
      response => {
        this.customers = response.content;
        console.log(this.customers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onClickAdd(): void {
    this.router.navigate(['/customers/add']);
  }
}
