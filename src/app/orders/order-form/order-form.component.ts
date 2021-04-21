import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/common/inventory';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  items: Inventory[];


  isLoading = false;

  constructor (private router: Router, private orderService: OrderService) {

  }

  ngOnInit(){
    this.isLoading = false;
    this.listItems();
  }

  onSubmitForm(form: NgForm){
    if (form.invalid){
      return;
    }
    alert("Form submited")
    this.isLoading = true;
    this.router.navigate(['/swashbucklers/landing-page']);
    form.resetForm();
    this.isLoading = false;
  }

  listItems(): void {
    this.orderService.getInventory().subscribe(
      response => {
        this.items = response.content;
      }
    )
  }


}
