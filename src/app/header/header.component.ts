import {Component, OnInit , OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {CurrentEmployee} from '../models/globalConstants';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{

  public employeeName: String;
  public todayDate: Date;

  ngOnInit(){
    CurrentEmployee.employeeLoggedIn.subscribe(emp => {
      this.employeeName = emp.firstName + " " + emp.lastName;
      this.todayDate = new Date();
    })
  }

  ngOnDestroy(){
    CurrentEmployee.employeeLoggedIn.unsubscribe();
  }

  constructor(private router: Router){}

  logoutMethod(){
    this.employeeName = "";
    CurrentEmployee.currentJWT="";
    this.router.navigate(['/swashbucklers/']);
  }

  redirect(element: HTMLElement){
     switch(element.getAttribute("name")){
       case "home":{
        this.router.navigate(['/swashbucklers/landing-page']);
        break;
       }
       case "orders":{
        //this.router.navigate(['/employees/show']);
        break;
       }
       case "employees":{
        this.router.navigate(['/employees/show']);
        break;
      }
      case "locations":{
        //this.router.navigate(['/employees/show']);
        break;
      }
      case "clockInOut":{
        this.router.navigate(['/clock-in-out']);
        break;
      }
      case "timesheets":{
        this.router.navigate(['/timesheets']);
        break;
      }
      case "logout":{
        this.router.navigate(['/swashbucklers/']);
      }
     }
  }

}
