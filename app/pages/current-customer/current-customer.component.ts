import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-current-customer',
  templateUrl: './current-customer.component.html',
  styleUrls: ['./current-customer.component.scss']
})
export class CurrentCustomerComponent implements OnInit {
  mapUrl: string = "";
  constructor(public mainservice: MainserviceService) { 
    this.mapUrl = "https://maps.google.com/maps?q=";
    this.mapUrl += ((mainservice.currentCustomer.Lat.toString()) + ",");
    this.mapUrl += ((mainservice.currentCustomer.Long.toString())+"&hl=es;z=14&amp;&output=embed");
    console.log(this.mapUrl)
  }
  ngOnInit(): void {
  }

}
