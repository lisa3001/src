import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public mainservice: MainserviceService) { }

  ngOnInit(): void {
  }

  replaceCustomers(){
    this.mainservice.customers = this.mainservice.allCustomers;
  }
  
}
