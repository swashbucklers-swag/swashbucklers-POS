import { Component, OnInit } from '@angular/core';
import { Employee } from '../common/employee';
import { Timesheet } from '../common/timesheet';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Timesheet[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }
}
