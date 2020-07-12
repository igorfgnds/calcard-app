import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { CustomersRoutingModule } from './customers-routing.module';

import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';

import { FilterPipe } from './pipes/filter.pipe';

import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    AddCustomersComponent,
    ListCustomersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CustomersRoutingModule,
    CurrencyMaskModule
  ]
})
export class CustomersModule { }
