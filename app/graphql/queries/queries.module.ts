import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import gql from "graphql-tag";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QueriesModule { }

export const getAllCustomers = gql`
  query {
    getAllCustomers {
      CustomerName
      CostumerCategory
      BuyingGroup
      PrimaryContact
      AlternateContact
      DeliveryMethod
      PhoneNumber
      FaxNumber
      DeliveryAddress
      Lat
      Long
      PostalAddress
      PostalCode
      Ubication
    }
  }`;

export const getCustomerByFilters = gql`
  query GetCustomerByFilters($ubication: String!, $namesHint: String!, $category: String!, $postalCode: String!){
    getCustomerByFilters(ubication: $ubication, namesHint: $namesHint, category: $category, postalCode: $postalCode){
      CustomerName
      CostumerCategory
      BuyingGroup
      PrimaryContact
      AlternateContact
      DeliveryMethod
      PhoneNumber
      FaxNumber
      DeliveryAddress
      Lat
      Long
      PostalAddress
      PostalCode
      Ubication
    }
  }`;