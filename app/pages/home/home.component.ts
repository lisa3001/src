import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public mainservice: MainserviceService) { }

  ngOnInit(): void {
  }

  replaceCustomers(){
    this.mainservice.customers = this.mainservice.allCustomers;
  }
}
