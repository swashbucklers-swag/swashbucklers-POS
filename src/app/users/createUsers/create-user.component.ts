import {Component} from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls : ['./create-user.component.css']
})
export class CreateUserComponent{
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  user: User;
  isLoading = false;

  ngOnInit(){
    this.isLoading = false;
  }

  onSaveUser(form: NgForm){
    if (form.invalid){
      return;
    }
    alert("Form submited")
    this.isLoading = true;
    form.resetForm();
    this.isLoading = false;
  }

}
