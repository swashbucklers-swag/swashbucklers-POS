import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL} from 'src/environments/environment';
import { Customer } from '../customers/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    httpHeaders: HttpHeaders = new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": 'Bearer '.concat(localStorage.getItem('swagjwt'))
    });
    private apiServerUrl = BASE_API_URL;

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): void {
    let r = this.http.post(`${this.apiServerUrl}/customer/create`,customer, { headers: this.httpHeaders });
    r.subscribe();
  }
  getCustomers(pageSize:number = 25, pageNumber:number = 0): Promise<any> {
    return this.http.get(BASE_API_URL.concat(`/customer/all?offset=${pageSize}&page=${pageNumber}`), { headers: this.httpHeaders }).toPromise();
  }
  editCustomerInfo(customer: Customer): void {
    let r = this.http.put(`${this.apiServerUrl}/customer/update`, customer, { headers: this.httpHeaders });
    r.subscribe();
  }

  getCustomerByPhoneNumber(phoneNumber:string): Promise<any> {
    return this.http.get(`${this.apiServerUrl}/customer/phone?phone=${phoneNumber}`, { headers: this.httpHeaders }).toPromise();
  }
}
