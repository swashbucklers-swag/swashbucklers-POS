import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JWT } from 'src/environments/environment';
import{Customer} from './customer';
import{CustomerService} from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private service: CustomerService) {
   }

  ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers(): void {
    this.service.getCustomers().then(
      response => {
        this.customers = response.content;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(JWT.currentJWT);
      }
    );
  }

}