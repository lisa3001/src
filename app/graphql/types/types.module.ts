import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TypesModule { }

export type Sample = {
	samplename: String,
	samplecode: number
}

export type Customer = {
  CustomerName: String
  CostumerCategory: String
  BuyingGroup: String
  PrimaryContact: String
  AlternateContact: String
  DeliveryMethod: String
  PhoneNumber: String
  FaxNumber: String
  DeliveryAddress: String
  Lat: number
  Long: number
  PostalAddress: String
  PostalCode: String
  Ubication: String
}
