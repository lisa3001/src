import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import {CustomersComponent} from './pages/customers/customers.component'
import {InvoicesComponent} from './pages/invoices/invoices.component'
import {SuppliersComponent} from './pages/suppliers/suppliers.component'
import {StatisticsComponent} from './pages/statistics/statistics.component'
import {CurrentCustomerComponent} from './pages/current-customer/current-customer.component'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'customers', component: CustomersComponent},
  {path:'invoices', component: InvoicesComponent},
  {path:'suppliers', component: SuppliersComponent},
  {path:'statistics', component: StatisticsComponent},
  {path: 'current-customer', component: CurrentCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
