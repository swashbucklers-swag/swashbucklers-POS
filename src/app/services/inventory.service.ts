import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Inventory } from '../models/Inventory';
import { JWT, BASE_API_URL } from '../models/globalConstants';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  url:string = "/inventory/all"
  inventory:Inventory[];

  constructor(private http:HttpClient) { }

  getInventory():Promise<Inventory[]>{
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

  addInventory(inventory:Inventory){
    this.inventory.push(inventory);
  }

  editInventoryInfo(editedInventory:Inventory){
    //todo post edit inventory info
    console.log(JSON.stringify(editedInventory));
  }

  editInventoryDiscount(editedInventory:Inventory){
    //todo post edit inventory discount
    console.log(JSON.stringify(editedInventory));
  }

  editInventoryQuantity(editedInventory:Inventory){
    //todo post edit inventory quantity
    console.log(JSON.stringify(editedInventory));
  }

  //in development, api call with jwt header to get inventory
  getInventory1():Promise<Inventory[]>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer '.concat(JWT.currentJWT)
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<Inventory[]>(BASE_API_URL.concat(this.url), requestOptions).toPromise();
  }
}