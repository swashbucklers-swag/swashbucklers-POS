import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory:Inventory[];
  inventoryService:InventoryService;
  isLoading:boolean = true;

  constructor(inventoryService: InventoryService) {
    this.inventoryService = inventoryService;
  }

  ngOnInit(): void {
    this.refreshInventory();
  }

  async refreshInventory(){
    try {
      await this.inventoryService.getInventory().then(inv => {
        this.inventory = inv.content;
        console.log(inv.content);
      });
    } catch (exception){
      alert("Failed to load inventory!\n\nIf this issue persists, contact your system administrator.")
    }
    this.isLoading = false;
  }
}
