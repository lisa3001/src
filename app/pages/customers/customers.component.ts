import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
import { Apollo } from 'apollo-angular';
import { OrderPipe } from 'ngx-order-pipe';
import { Customer } from 'src/app/graphql/types/types.module';
import { getCustomerByFilters } from 'src/app/graphql/queries/queries.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1
  };

  reverse: boolean = false;
  isDisabledAsc: boolean = false;
  isDisabledDesc: boolean = false;
  predicate: string = "CustomerName";
  link: string = "current-customer"
  activatedRoute: ActivatedRoute;

  constructor(public mainservice: MainserviceService, private apollo: Apollo, public orderPipe: OrderPipe,
     private router: Router, public route: ActivatedRoute) {
    this.reverse = false;
    this.isDisabledAsc = true;
  
   }

  ngOnInit(): void {
  }

  sortAscending(){
    this.reverse = false;
    this.isDisabledAsc = true;
    this.isDisabledDesc = false;
  }

  sortDescending(){
    this.reverse = true;
    this.isDisabledAsc = false;
    this.isDisabledDesc = true;
  }

  replaceCharacters(text: String){
    var result = text.replace("","");
    return result
  }

  searchCustomers(){
    var customerName = (<HTMLInputElement>document.getElementById("field-customer-name")).value;
    var customerCategory = (<HTMLInputElement>document.getElementById("field-customer-category")).value;
    var customerLocation = (<HTMLInputElement>document.getElementById("field-customer-location")).value;
    if(customerName != "" || customerCategory != "" || customerLocation != ""){
      this.apollo.query({
        query: getCustomerByFilters,
        variables: {
          ubication: customerLocation,
          namesHint: customerName,
          category: customerCategory
        }
      }).subscribe(result => {
        if(!result.data['getCustomerByFilters'] ) this.mainservice.customers = result.data['getCustomerByFilters'] as Customer[];
      });
      this.clearSearch();
      this.config.currentPage = 1;
    }
  }

  clearSearch(){
    this.clearTag("field-customer-name", "Write a name...");
    this.clearTag("field-customer-category", "Write a category...");
    this.clearTag("field-customer-location", "Write a location...");
    (<HTMLInputElement>document.getElementById("field-customer-name")).value = "";
    (<HTMLInputElement>document.getElementById("field-customer-category")).value = "";
    (<HTMLInputElement>document.getElementById("field-customer-location")).value = "";
  }


  clearTag(tagName: string, message: string) {
    var element = (document.getElementById(tagName) as HTMLInputElement);
    element.classList.remove("is-invalid");
    element.classList.remove("is-valid");
    element.placeholder = message;
  }

  viewCostumer(i: number){
    if(!this.reverse) this.mainservice.customers.sort((a, b) => (a.CustomerName > b.CustomerName) ? 1 : -1)
    else this.mainservice.customers.sort((a, b) => (a.CustomerName < b.CustomerName) ? 1 : -1)
    this.mainservice.currentCustomer = this.mainservice.customers[i];
    this.mainservice.currentCustomerIndex = i;
    //this.router.navigate(['./current-customer'], {relativeTo: this.route});
    this.router.navigate([this.link]);
  }

  replaceCustomers(){
    this.mainservice.customers = this.mainservice.allCustomers;
  }

}
