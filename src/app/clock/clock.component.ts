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

  constructor(private router: Router, private timesheetService: TimesheetServices) {
    this.timesheetService.getTimesheets(0,5,"","").then(data => {
      this.timesheets = [];
      this.timesheets.push(...data.content);
      console.log(data.content);
    }).catch(exception => {
      console.log(exception.error.message);
      //alert(exception.error.message);
    })
  }

  public timesheets :Timesheet[];

  ngOnInit(): void {

  }


}
