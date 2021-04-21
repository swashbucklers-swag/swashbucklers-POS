import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { Employee } from '../common/employee';
import { Timesheet } from '../common/timesheet';
import {TimesheetServices} from '../services/timesheet.services'

@Component({
  selector: 'app-clockin-clockout',
  templateUrl: './clockin-clockout.component.html',
  styleUrls: ['./clockin-clockout.component.css']
})
export class ClockinClockoutComponent implements OnInit {

  myTimesheets = [];
  constructor (private router: Router, private timesheetService: TimesheetServices) { }



  ngOnInit(): void {
  }

  onClockIn(form: NgForm){
    if (form.invalid){
      return;
    }

    this.timesheetService.clockIn(form.value.email,form.value.password);

    //this.router.navigate(['/swashbucklers/landing-page']);
    form.resetForm();

  }

}
