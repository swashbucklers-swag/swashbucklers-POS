import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Employee } from '../common/employee';
import { Timesheet } from '../common/timesheet';
=======
import{Customer} from './customer';
import{CustomerService} from './customer.service';
import { Router } from '@angular/router';
>>>>>>> origin/john

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Timesheet[] = [];

<<<<<<< HEAD
  constructor() {
  }

  ngOnInit(): void {

  }
}
=======
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
>>>>>>> origin/john
