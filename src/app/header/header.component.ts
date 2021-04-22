import {Component} from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private router: Router){}

  redirect(element: HTMLElement){
     switch(element.getAttribute("name")){
       case "home":{
        this.router.navigate(['/swashbucklers/']);
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
      case "clock":{
        this.router.navigate(['/clock-in-out']);
        break;
      }
     }





  }

}
