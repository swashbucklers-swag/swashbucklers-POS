import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    
    httpHeaders: HttpHeaders = new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJibGFja3BlYXJsQHN3YWdlcnMuY29tIiwiaWF0IjoxNjE5MDEyNDQ0LCJleHAiOjE2MTkwNDg0NDR9.BQVo6wqcWt9ThGE1ZuRuqaHlvGImz38IdTTKLN1hQRY',
    });
  
    private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): void {
        let r = this.http.post(`${this.apiServerUrl}/customer/create`, customer, { headers: this.httpHeaders });
        r.subscribe();
  }
  getCustomers(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/customer/all`, { headers: this.httpHeaders });
  }
}