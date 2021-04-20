import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

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
