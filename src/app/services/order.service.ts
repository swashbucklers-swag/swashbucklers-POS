import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, CreateOrder } from '../models/order';
import { JWT, BASE_API_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = '/order/all';
  private baseUrlCreate = '/order/create';
  private baseUrlItem = '/inventory/all';

  // httpHeaders: HttpHeaders = new HttpHeaders({
  //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MDA4NjE3LCJleHAiOjE2MTkwNDQ2MTd9.X2gQkcvBDGOaOiJgCO_AvT6X-J3Qar7EEEFeWjlr8GA',
  // });

  constructor(private http: HttpClient) { }

  // getOrders(): Promise<any> {
  //   return this.http.get(this.baseUrl, { headers: this.httpHeaders }).toPromise();
  // }
  
  // getInventory(): Promise<any> {
  //   return this.http.get(this.baseUrlItem, { headers: this.httpHeaders }).toPromise();
  // }

  createOrder(createOrder:CreateOrder) : void {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MDU4NTA4LCJleHAiOjE2MTkwOTQ1MDh9.LoLVjXpYH7w3xj8qcsh-0IoMUymXPvc-tZycgTuN3ng'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    let create = this.http.get<Order>(BASE_API_URL.concat(this.baseUrlCreate),requestOptions);
    create.subscribe();
  }

  getOrders():Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MDU4NTA4LCJleHAiOjE2MTkwOTQ1MDh9.LoLVjXpYH7w3xj8qcsh-0IoMUymXPvc-tZycgTuN3ng'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<Order[]>(BASE_API_URL.concat(this.baseUrl), requestOptions).toPromise();
  }
}
