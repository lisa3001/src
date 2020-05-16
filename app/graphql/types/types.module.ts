import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TypesModule { }

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

export type Item = {
  StockItemName: String
  Description: String
  PackageTypeName: String
  Quantity: number
  UnitPrice: number
  TaxRate: number
  TaxAmount: number
  LineProfit: number
  ExtendedPrice: number
  SupplierName: String
  SupplierCategoryName: String
}

export type Invoice = {
  TransactionAmount: number
  FinalizationDate: String
  InvoiceID: number
  CustomerName: String
  CustomerCategoryName: String
  Location: String
  DeliveryMethodName: String
  ContactPerson: String
  SalesPerson: String
  PackedByPerson: String
  DeliveryInstructions: String
  ConfirmedReceivedBy: String
  ConfirmedDeliveryTime: String
}
