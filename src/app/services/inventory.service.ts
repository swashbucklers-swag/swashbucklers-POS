import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Inventory } from '../models/Inventory';
import { BASE_API_URL } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  inventory:Inventory[];

  constructor(private http:HttpClient) { }

  getInventory1():Promise<Inventory[]>{
    this.inventory = [{
      itemId:1,
      name:"Pistol",
      description:"A cool flintlocke pistol",
      price:250.00,
      discount:40,
      quantity:7
    },
    {
      itemId:2,
      name:"Barrel of Potatoes",
      description:"Just a barrel of potatoes that can feed a crew for days",
      price:35.49,
      discount:10,
      quantity:30
    },
    {
      itemId:3,
      name:"Red Hose",
      description:"Red striped pantaloons",
      price:40.00,
      discount:0,
      quantity:20
    }];
    return of(this.inventory).toPromise();
  }

  //in development, api call with jwt header to get inventory
  getInventory():Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<any>(BASE_API_URL.concat("/inventory/all"), requestOptions).toPromise();
  }

  addInventory(inventory:Inventory):Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    inventory.itemId = 0;

    return this.http.post<any>(BASE_API_URL.concat("/inventory/add"), inventory, requestOptions).toPromise();
  }

  editInventoryInfo(editedInventory:Inventory):Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    const inventoryInfo = {
				itemId: editedInventory.itemId,
				name: editedInventory.name,
				description: editedInventory.description,
				price: editedInventory.price
    }

    return this.http.put<any>(BASE_API_URL.concat("/inventory/update/info"), inventoryInfo, requestOptions).toPromise();
  }

  editInventoryDiscount(editedInventory:Inventory):Promise<any>{
    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    const inventoryDiscount = {
				itemId: editedInventory.itemId,
				discount: editedInventory.discount
    }

    return this.http.put<any>(BASE_API_URL.concat("/inventory/update/discount"), inventoryDiscount, requestOptions).toPromise();
  }

  editInventoryQuantity(editedInventory:Inventory):Promise<any>{
    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    const inventoryQuantity = {
				itemId: editedInventory.itemId,
				quantity: editedInventory.quantity
    }

    return this.http.put<any>(BASE_API_URL.concat("/inventory/update/quantity"), inventoryQuantity, requestOptions).toPromise();
  }

  deleteInventory(inventoryToDelete:Inventory):Promise<any>{
    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '.concat(localStorage.getItem('swagjwt'))
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.delete<any>(BASE_API_URL.concat("/inventory/delete/".concat(inventoryToDelete.itemId.toString())), requestOptions).toPromise();
  }
}
