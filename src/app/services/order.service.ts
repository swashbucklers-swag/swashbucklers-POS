import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { JWT, BASE_API_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = '/order/all';
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

  getOrders():Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MDA4NjE3LCJleHAiOjE2MTkwNDQ2MTd9.X2gQkcvBDGOaOiJgCO_AvT6X-J3Qar7EEEFeWjlr8GA'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<Order[]>(BASE_API_URL.concat(this.baseUrl), requestOptions).toPromise();
  }
}
