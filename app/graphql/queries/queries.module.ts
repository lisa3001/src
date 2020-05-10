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

export const getAllSamples = gql`
query {
	getAllSamples {
		samplename
		samplecode
	}
}`;

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