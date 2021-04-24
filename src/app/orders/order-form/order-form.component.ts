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
    statusHistory: [{
      orderStatus: "PROCESSING_ORDER"
    }],
    orderDetailsDTOSet: [{
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
      alert("Form has invalid entries, please fix and try again")
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
      statusHistory: [{
        orderStatus: "PROCESSING_ORDER"
      }],
      orderDetailsDTOSet: [{
        itemId: form.value.itemId,
        quantity: form.value.quantity
      }]
    }
    if (this.createOrder.customerId < 0) {
      alert("Invalid customerId, please enter a positive value")
      return;
    }
    alert("Order for has been submitted for processing")
    this.isLoading = true;
    console.log(this.createOrder);
    this.orderService.createOrder(this.createOrder);
    this.router.navigate(['/orders']);
    form.resetForm();
    this.isLoading = false;
  }

  getCustomers(){
    
  }

  // listItems(): void {
  //   this.orderService.getInventory().then(
  //     response => {
  //       this.items = response.content;
  //     }
  //   )
  // }


}
