import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentEmployee } from './models/globalConstants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor (private router: Router) {
    CurrentEmployee.employeeLoggedIn.next(localStorage.getItem('swagEmpName'));
    //this.router.navigate(['/swashbucklers']);
  }

}
