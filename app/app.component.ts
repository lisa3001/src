import { Component } from '@angular/core';
import { MainserviceService } from './mainservice.service';
//import * as $ from 'jquery/dist/jquery.min.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto1BD2';

  constructor(private mainservice: MainserviceService) {
	
  };
}