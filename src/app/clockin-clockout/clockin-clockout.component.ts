import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
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

  async onClockIn(form: NgForm){
    if (form.invalid){
      return;
    }
    //console.log(form.value.inOrOut);
    var methodResponse: Promise<any>;

    if(form.value.inOrOut==="in"){
      methodResponse=this.timesheetService.clockIn(form.value.email,form.value.password,"in");
    }else{
      methodResponse=this.timesheetService.clockIn(form.value.email,form.value.password,"out");
    }

    methodResponse.then(data => {
      console.log(data);
      alert("Succesfully registered");
    }).catch(exception => {
      console.log(exception.error.message);
      alert(exception.error.message);
    })

  }

}
