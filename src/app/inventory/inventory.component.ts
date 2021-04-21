import { Component, OnInit } from '@angular/core';
import { Inventory } from '../models/Inventory'
import { InventoryService } from '../services/inventory.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory:Inventory[];
  inventoryService:InventoryService;
  

  constructor(inventoryService:InventoryService) {
    this.inventoryService = inventoryService;
  }

  ngOnInit(): void {
    this.inventoryService.getInventory().then(inv => this.inventory = inv);
  }
}
