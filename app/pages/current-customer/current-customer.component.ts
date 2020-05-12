import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-current-customer',
  templateUrl: './current-customer.component.html',
  styleUrls: ['./current-customer.component.scss']
})
export class CurrentCustomerComponent implements OnInit {

  constructor(public mainservice: MainserviceService) { }

  ngOnInit(): void {
  }

}
