import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Customer } from './graphql/types/types.module';
import { getAllCustomers } from './graphql/queries/queries.module';
import { Item } from './graphql/types/types.module';
import { Invoice } from './graphql/types/types.module';
import { getAllInvoices } from './graphql/queries/queries.module';
import { getItemsFromAllInvoices } from './graphql/queries/queries.module';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  customers: Customer[] = [];
  allCustomers: Customer[] = [];
  customersByFilters: Customer[] = [];
  currentCustomer: Customer = null;
  currentCustomerIndex: number = 0;
  invoices: Invoice[] = [];
  allInvoices: Invoice[] = [];
  items: Item[] = [];
  
  constructor(private apollo: Apollo) { 
    this.loadCustomers()
    this.loadInvoices()
    this.loadInvoiceItems()
  }

  loadCustomers() {
    this.apollo.query({
      query: getAllCustomers
    }).subscribe(result => {
      this.customers = result.data['getAllCustomers'] as Customer[];
      this.allCustomers = result.data['getAllCustomers'] as Customer[];
      console.log(this.customers)
    });
    
  }

  loadInvoices(){
    this.apollo.query({
      query: getAllInvoices
    }).subscribe(result => {
      this.invoices = result.data['getAllInvoices'] as Invoice[];
      this.allInvoices = result.data['getAllInvoices'] as Invoice[];
      console.log(this.invoices);
    });
  }

  loadInvoiceItems(){
    this.apollo.query({
      query: getItemsFromAllInvoices
    }).subscribe(result => {
      this.items = result.data['getItemsFromAllInvoices'] as Item[];
      console.log(this.items);
    });
  }



};