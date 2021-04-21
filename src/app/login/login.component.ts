import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor (private router: Router) {

  }

  ngOnInit(){
  }

  onSaveLogin(form: NgForm){
    if (form.invalid){
      return;
    }
    alert("Form submited")
    this.router.navigate(['/swashbucklers/landing-page']);
    form.resetForm();
  }

}
