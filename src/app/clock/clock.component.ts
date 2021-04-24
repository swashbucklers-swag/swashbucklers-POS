import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timesheet } from '../common/timesheet';
import { TimesheetServices } from '../services/timesheet.services';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  public timesheets :Timesheet[];


  constructor(private router: Router, private timesheetService: TimesheetServices) {

  }

  ngOnInit(): void {
    this.getTimesheets();
  }

  public getTimesheets(): void{
    this.timesheetService.getTimesheets(0,5,"","").then(data => {
      this.timesheets = [];
      this.timesheets = data.content;
      console.log(this.timesheets);
    }).catch(exception => {
      console.log(exception.error);
      //alert(exception.error.message);
    })
  }
}
