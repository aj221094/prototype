import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { ReadFileService } from '../read-file.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  @Input()
  apiName:String;

  requestData:any;
  responseData:any;

  constructor(private rs:ReadFileService, ) { }

  ngOnInit(){
  }

  // logic to inform child component of the changes in 'select api' select box.
  ngOnChanges(changes : SimpleChanges){
    const apiNameCurrent : SimpleChange = changes.apiName;
    this.apiName = apiNameCurrent.currentValue;
    this.showData();
  }

  // to fetch data from files
  showData():void {
    
    var requestFileUrl= './assets/requestFiles/' + this.apiName +'.json';
    this.rs.readRequest(requestFileUrl).subscribe(
      (data)=>{ 
        try{
          this.requestData = JSON.parse(data)
        }
        catch(e){console.log("data in file not of type json")}
      },
      error=>console.log(error)
      );

      var responseFileUrl = './assets/responseFiles/' + this.apiName + '.json';
      this.rs.readRequest(responseFileUrl).subscribe(
        (data)=>{ 
          try{
            this.responseData = JSON.parse(data)
          }
          catch(e){console.log("data in file not of type json")}
        },
        error=>console.log(error)
        );
    }
}
