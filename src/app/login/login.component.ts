import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myControl = new FormControl();
  constructor (private router: Router, private loginService:LoginService) {}

  ngOnInit(){
  }

  onSaveLogin(form: NgForm){
    if (form.invalid){
      alert("Invalid Email or Password");
      return;
    }

    let login:Login = new Login(form.value);

    this.loginService.authenticate(login.username, login.password).then(result => {

      if (result){
        alert("Login Successful! You will be redirected to the home page.");
        this.router.navigate(['/swashbucklers/landing-page']);
        form.resetForm();
      } else {
        alert("Login Failed! Ensure your email and password are correct. If this issue persists contact your system administrator.")
      }
    })

  }

}
