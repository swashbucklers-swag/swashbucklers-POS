import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory } from '../../models/Inventory';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  @Input() inventory:Inventory;
  editVisible:boolean = false;

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
  }

  delete(){
    if(confirm('Are you sure you want to delete this item?\nitemId:'.concat(this.inventory.itemId.toString()).concat(" name: ").concat(this.inventory.name))){
      
      try {
        this.inventoryService.deleteInventory(this.inventory);
        alert('Inventory entry deleted succesfully!');

      } catch (exception) {
        alert('An Error occured when trying to delete an entry from inventory.');
      }
    }
  }

  toggleEditInfo(){
    this.editVisible = !this.editVisible;
  }

  async saveInfo(){
    this.inventory.price = Math.round((this.inventory.price + Number.EPSILON) * 100) / 100;

    if(this.inventory.name.length == 0 || this.inventory.description.length == 0 || this.inventory.price <= 0){
      alert("Failed to update item info, one or more fields were formatted incorrectly.");

    } else {

      try {
        this.toggleEditInfo();

        await this.inventoryService.editInventoryInfo(this.inventory).then(() => {
          alert('Item info saved succesfully!');
        });

      } catch (exception) {
        alert('An Error occured when trying to update item info.');
        console.log(exception);
      }
    }
  }

  async saveDiscount(){
    this.inventory.discount = Math.floor(this.inventory.discount);

    if(this.inventory.discount < 0 || this.inventory.discount >= 100){
      alert("Failed to update item discount, discount must be between 0 and 99.");

    } else {

      try {
        this.toggleEditInfo();

        await this.inventoryService.editInventoryDiscount(this.inventory).then(() => {
          alert('Item discount saved succesfully!');
        });

      } catch (exception) {
        alert('An Error occured when trying to update item discount.');
        console.log(exception);
      }
    }
  }

  async saveQuantity(){
    this.inventory.quantity = Math.floor(this.inventory.quantity);

    if(this.inventory.quantity <= 0){
      alert("Failed to update item quantity, quantity must not be negative.");

    } else {

      try {
        this.toggleEditInfo();

        await this.inventoryService.editInventoryDiscount(this.inventory).then(() => {
          alert('Item quantity saved succesfully!');
        });

      } catch (exception) {
        alert('An Error occured when trying to update item quantity.');
        console.log(exception);
      }
    }
  }
}
