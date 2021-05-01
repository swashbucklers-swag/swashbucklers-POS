import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Timesheet } from '../../common/timesheet';
import { TimesheetServices } from '../../services/timesheet.services';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})

export class TimesheetComponent implements OnInit {
  @Input() timesheet : Timesheet;
  editVisible:boolean = false;

constructor(private timesheetServices: TimesheetServices, private router: Router){}

  ngOnInit(): void {
  }

  toggleEditInfo(){
    this.editVisible = !this.editVisible;
  }
  saveInfo(){
    //Date format: yyyy[/.-]mm[/.-]dd hh:mm:ss
    var r = /^((((19|[2-9]\d)\d{2})[\/\.-](0[13578]|1[02])[\/\.-](0[1-9]|[12]\d|3[01])\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|(((19|[2-9]\d)\d{2})[\/\.-](0[13456789]|1[012])[\/\.-](0[1-9]|[12]\d|30)\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|(((19|[2-9]\d)\d{2})[\/\.-](02)[\/\.-](0[1-9]|1\d|2[0-8])\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))[\/\.-](02)[\/\.-](29)\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])))$/;

    if(!r.test(this.timesheet.clockIn) && !r.test(this.timesheet.clockIn)){
      return;
    }

    console.log(this.timesheet.clockIn);
    console.log(this.timesheet.clockOut);
    console.log(r.test(this.timesheet.clockIn));
    console.log(r.test(this.timesheet.clockOut));


    this.timesheetServices.updateTimesheet(this.timesheet.timesheetId,this.timesheet.clockIn,this.timesheet.clockOut)
    .then(response =>{
      console.log(response);
      this.toggleEditInfo();
      alert('Timesheet info saved succesfully');
      this.router.navigate(["/timesheets"]);
    }).catch(exception => {
      console.log(exception.error);
      alert(exception.error);
      this.router.navigate(["/timesheets"]);
    })
  }

}

