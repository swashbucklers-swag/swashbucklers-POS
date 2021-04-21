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
    if(confirm('Are you sure you want to delete itemId:'.concat(this.inventory.itemId.toString()).concat(" name: ").concat(this.inventory.name))){
      //todo send get request to delete item
      console.log("delete ".concat(this.inventory.name.toString()));
    }
  }

  toggleEditInfo(){
    this.editVisible = !this.editVisible;
  }

  saveInfo(){
    this.inventoryService.editInventoryInfo(this.inventory);
    this.toggleEditInfo();
  }

  saveDiscount(){
    this.inventoryService.editInventoryDiscount(this.inventory);
    this.toggleEditInfo();
  }

  saveQuantity(){
    this.inventoryService.editInventoryQuantity(this.inventory);
    this.toggleEditInfo();
  }
}
