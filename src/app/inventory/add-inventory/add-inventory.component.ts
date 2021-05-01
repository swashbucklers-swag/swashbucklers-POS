import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})

export class AddInventoryComponent implements OnInit {

  @Output() addedNewInventory = new EventEmitter<boolean>();

  newInventory:Inventory = {
    itemId:0,
    name:"Item Name",
    description:"Item Description",
    price:9.99,
    discount:0,
    quantity:0
  }

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
  }

  async onSubmit(){
    this.newInventory.quantity = Math.floor(this.newInventory.quantity);
    this.newInventory.discount = Math.floor(this.newInventory.discount);
    this.newInventory.price = Math.round((this.newInventory.price + Number.EPSILON) * 100) / 100;


    if (this.newInventory.name.length == 0 || this.newInventory.description.length == 0 || this.newInventory.price <= 0 || this.newInventory.discount < 0 || this.newInventory.discount >= 100 || this.newInventory.quantity < 0){
      alert('Failed to add new inventory. One or more fields are formatted incorrectly.');

    } else {

      try {
        await this.inventoryService.addInventory(this.newInventory).then(() => {
          alert("New Inventory Entery Added Successfully!");
          this.addedNewInventory.emit(true);
        })

      } catch (exception) {
        alert('Failed to add new Inventory Entry! Ensure inventory item is formatted correctly.');
      }
    }
  }
}
