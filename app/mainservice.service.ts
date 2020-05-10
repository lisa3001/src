import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Sample } from './graphql/types/types.module';
import { Customer } from './graphql/types/types.module';
import { getAllSamples } from './graphql/queries/queries.module';
import { getAllCustomers } from './graphql/queries/queries.module';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  samples: Sample[] = [];
  customers: Customer[] = [];
  
  constructor(private apollo: Apollo) { 
    this.loadCustomers()
  }

  loadCustomers() {
    this.apollo.query({
      query: getAllCustomers
    }).subscribe(result => {
      this.customers = result.data['getAllCustomers'] as Customer[];
    });
  }
};