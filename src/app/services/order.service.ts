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
  private UrlFindByCustomerId = '/order/customer-id/';
  private baseUrlItem = '/inventory/all';


  constructor(private http: HttpClient) { }

  createOrder(createOrder:CreateOrder) : void {

    const headerInfo = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '.concat(JWT.currentJWT)
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };
    console.log(JWT.currentJWT);
    let create = this.http.post<Order>(BASE_API_URL.concat(this.baseUrlCreate), createOrder, requestOptions);
    create.subscribe();
  }

  getOrders():Promise<any>{

    const headerInfo = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '.concat(JWT.currentJWT)
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<Order[]>(BASE_API_URL.concat(this.baseUrl), requestOptions).toPromise();
  }

  getOrdersByCustomerService(customerId:number):Promise<any> {
    const headerInfo = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '.concat(JWT.currentJWT)
    };

    const requestOptions = {
      headers: new HttpHeaders(headerInfo)
    };

    return this.http.get<Order[]>(BASE_API_URL.concat(this.UrlFindByCustomerId)+customerId, requestOptions).toPromise();
  }
}
