import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, environment, JWT } from 'src/environments/environment';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    
    httpHeaders: HttpHeaders = new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": 'Bearer '.concat(JWT.currentJWT)
    });
  
    private apiServerUrl = BASE_API_URL;

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): void {
        let r = this.http.post(`${this.apiServerUrl}/customer/create`, customer, { headers: this.httpHeaders });
        r.subscribe();
  }
  getCustomers(): Promise<any> {
    return this.http.get(`${this.apiServerUrl}/customer/all`, { headers: this.httpHeaders }).toPromise();
  }
}