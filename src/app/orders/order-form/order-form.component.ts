import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Inventory } from 'src/app/models/Inventory';
import { Location } from 'src/app/models/location';
import { Order, CreateOrder } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  items: Inventory[];

  createOrder: CreateOrder = { 
    customerId:0,
    location: new Location,
    orderDetails: [{
      itemId: 0,
      quantity:0
    }]

  }

  isLoading = false;

  constructor (private router: Router, private orderService: OrderService) {

  }

  ngOnInit(){
    this.isLoading = false;
    // this.listItems();
  }

  onSubmitForm(form: NgForm){
    if (form.invalid){
      return;
    }
    this.createOrder = {
      customerId: form.value.customerId,
      location: {
        locationId: 0,
        address: form.value.address,
        city: form.value.city,
        state: form.value.state,
        zip: form.value.zip
      },
      orderDetails: [{
        itemId: form.value.itemId,
        quantity: form.value.quantity
      }]
    }
    alert("Form submited")
    this.isLoading = true;
    this.router.navigate(['/swashbucklers/landing-page']);
    form.resetForm();
    this.isLoading = false;
  }

  // listItems(): void {
  //   this.orderService.getInventory().then(
  //     response => {
  //       this.items = response.content;
  //     }
  //   )
  // }


}
