import { Component, OnInit } from '@angular/core';
import { DataDisplayComponent } from './data-display/data-display.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    this.state = false;
  }
// state variable
  state:boolean;

  ngOnInit() {
  }
  
//  state logic to display data-display Component
  display(e):void{
    var value:string = e.target.value;

    if(value != "select"){
      this.state = true;
    }
    else{
      this.state = false;
    }
  }
}
