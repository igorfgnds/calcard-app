import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {

  customer: Customer;

  states = [];
  genres = [];
  maritalStatus = []

  addCustomerSuccess: Boolean = false;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customer = new Customer();
   
    this.customersService.getStates().subscribe(data => {
      this.states = data;
    });
    
    this.customersService.getGenres().subscribe(data => {
      this.genres = data;
    });
    
    this.customersService.getMaritalStatus().subscribe(data => {
      this.maritalStatus = data;
    });
  }

  onSubmit() {
    event.preventDefault();
    this.customersService.addCustomer(this.customer).subscribe(res => {
      this.addCustomerSuccess = true;
    })
  }

}
