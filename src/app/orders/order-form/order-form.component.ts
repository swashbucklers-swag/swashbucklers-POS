import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Inventory } from 'src/app/models/Inventory';
import { Order, CreateOrder } from 'src/app/models/order';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  items: Inventory[];
  customer: Customer;
  phoneNumber: string = "";
  isLoading = false;
  // createOrder: CreateOrder;
  // @Output() addedNewOrder = new EventEmitter<boolean>();

  createOrder: CreateOrder = {
    customerId: 0,
    location: {
      locationId: 0,
      address: "",
      city: "",
      state: "",
      zip: ""
    },
    statusHistory: [{
      orderStatus: "PROCESSING_ORDER"
    }],
    orderDetailsDTOSet: [{
      itemId: 0,
      quantity: 0
    }]
  }

  constructor (private router: Router, private orderService: OrderService, private customerService: CustomerService){}

  ngOnInit(){
    this.isLoading = false;
  }

  async onSubmitForm(form: NgForm){

    let customer: Promise<Customer> = this.getCustomerByPhoneNumber(form.value.phoneNumber);

    let q:number = form.value.quantity;

    q = Math.floor(q);
    try {
      const cId:number = (await customer).customerId;
    } catch (exception) {
      alert("There are no customers that match the given phone number")
    }

    this.createOrder = {
      customerId: (await customer).customerId,
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
        quantity: q
      }]
    }

    if (this.createOrder.location.address.length == 0 || this.createOrder.location.city.length == 0 || this.createOrder.location.zip.length == 0 || this.createOrder.orderDetailsDTOSet[0].itemId <= 0 || this.createOrder.orderDetailsDTOSet[0].quantity <= 0) {
      alert("Failed to create a new order. One or more fields are formatted incorrectly.")
      return;
    } else {

      try {
        alert("Order for has been submitted for processing")
        this.isLoading = true;
        console.log(this.createOrder);
        this.orderService.createOrder(this.createOrder);
        this.router.navigate(['/orders']);
        form.resetForm();
        this.isLoading = false;
      } catch (exception) {
        alert("Failed to create a new order. Ensure order is formatted correctly");
      }

    }


  }

  getCustomerByPhoneNumber(phoneNumber:string){
    let c:Promise<any> = this.customerService.getCustomerByPhoneNumber(phoneNumber);

    return c;
  }

}
