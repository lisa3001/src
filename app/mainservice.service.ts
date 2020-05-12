import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Customer } from './graphql/types/types.module';
import { getAllCustomers } from './graphql/queries/queries.module';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  customers: Customer[] = [];
  allCustomers: Customer[] = [];
  customersByFilters: Customer[] = [];
  currentCustomer: Customer = null;
  currentCustomerIndex: number = 0;
  
  
  constructor(private apollo: Apollo) { 
    this.loadCustomers()
  }

  loadCustomers() {
    this.apollo.query({
      query: getAllCustomers
    }).subscribe(result => {
      this.customers = result.data['getAllCustomers'] as Customer[];
      this.allCustomers = result.data['getAllCustomers'] as Customer[];
    });
  }
};