import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../common/order';
import { OrdersComponent } from '../orders/orders.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl2 = 'http://localhost:9090/order/all';
  private baseUrlItem = 'http://localhost:9090/inventory/all';

  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MDA4NjE3LCJleHAiOjE2MTkwNDQ2MTd9.X2gQkcvBDGOaOiJgCO_AvT6X-J3Qar7EEEFeWjlr8GA',
  });

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<any> {
    return this.httpClient.get(this.baseUrl2, { headers: this.httpHeaders })
  }
  
  getInventory(): Observable<any> {
    return this.httpClient.get(this.baseUrlItem, { headers: this.httpHeaders })
  }
}



interface GetResponse {
  content: [{
    orders:Order[]
  }];
}
