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
  isLoading:boolean = true;
  pageNumber:number = 0;
  pageSize:number = 25;
  totalPages:number;
  totalElements:number;

  constructor(inventoryService:InventoryService) {
    this.inventoryService = inventoryService;
  }

  ngOnInit(): void {
    this.refreshInventory()
  }

  pageFirst(){
    this.pageNumber = 0;
    this.refreshInventory();
  }

  pageLast(){
    this.pageNumber = (this.totalPages - 1);
    this.refreshInventory();
  }

  pageNext(){
    if(this.pageNumber != (this.totalPages - 1)){
      this.pageNumber++;
      this.refreshInventory();
    }
  }

  pagePrevious(){
    if(this.pageNumber != 0){
      this.pageNumber--;
      this.refreshInventory();
    }
  }

  async refreshInventory(){
    this.isLoading = true;
    try {
      await this.inventoryService.getInventory(this.pageSize, this.pageNumber).then(inv => {
        this.inventory = inv.content;
        this.pageNumber = inv.pageable.pageNumber;
        this.pageSize = inv.pageable.pageSize;
        this.totalPages = inv.totalPages;
        this.totalElements = inv.totalElements;
      });
    } catch (exception){
      alert("Failed to load inventory!\n\nIf this issue persists, contact your system administrator.")
    }
    this.isLoading = false;
  }
}
