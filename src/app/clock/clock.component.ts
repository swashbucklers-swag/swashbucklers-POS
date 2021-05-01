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
  isLoading=true;
  pageSizeOptions:number[] = [5, 10, 25, 50, 100];

    //pagination information
    pageNumber:number = 0;
    pageSize:number = 25;
    totalPages:number;
    totalElements:number;


  constructor(private router: Router, private timesheetService: TimesheetServices) {

  }

  ngOnInit(): void {
    this.refreshTimesheets();
  }

  setPageSize(event: any){
    this.pageSize = parseInt(event.target.value, 10);
  }
  setPagination(){
    this.refreshTimesheets();
  }
  pageFirst(){
    this.pageNumber = 0;
    this.refreshTimesheets();
  }
  pageLast(){
    this.pageNumber = (this.totalPages - 1);
    this.refreshTimesheets();
  }
  pageNext(){
    if(this.pageNumber != (this.totalPages - 1)){
      this.pageNumber++;
      this.refreshTimesheets();
    }
  }

  pagePrevious(){
    if(this.pageNumber != 0){
      this.pageNumber--;
      this.refreshTimesheets();
    }
  }

  async refreshTimesheets(){
    this.isLoading = true;
    try{
      await this.timesheetService.getTimesheets(5,this.pageNumber).then(timesheets => {
        this.timesheets = timesheets.content;
        this.pageNumber = timesheets.pageable.pageNumber;
        this.pageSize = timesheets.pageable.pageSize;
        this.totalPages = timesheets.totalPages;
        this.totalElements = timesheets.totalElements;
      })
    }catch(exception){
      alert('Failed to load timesheets!\n\nIf this issue persists, contact your system administrator.');
    }
    this.isLoading = false;
  }
}
