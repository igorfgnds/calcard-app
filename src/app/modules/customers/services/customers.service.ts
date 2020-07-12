import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import { Customer } from '../models/customer.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.apiUrl + 'customers')
      .pipe(map((data: any) => {
        return data;
      }));
  }

  addCustomer(customer: Customer) {
    return this.http.post<Customer>(this.apiUrl + 'customers', customer);
  }

  getStates() {
    return this.http.get(this.apiUrl + 'states')
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getGenres() {
    return this.http.get(this.apiUrl + 'genres')
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getMaritalStatus() {
    return this.http.get(this.apiUrl + 'maritalStatus')
      .pipe(map((data: any) => {
        return data;
      }));
  }
}
