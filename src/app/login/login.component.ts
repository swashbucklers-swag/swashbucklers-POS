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

  isLoading = false;

  constructor (private router: Router) {

  }

  ngOnInit(){
    this.isLoading = false;
  }

  onSaveLogin(form: NgForm){
    if (form.invalid){
      return;
    }
    alert("Form submited")
    this.isLoading = true;
    this.router.navigate(['/swashbucklers/landing-page']);
    form.resetForm();
    this.isLoading = false;
  }

}
