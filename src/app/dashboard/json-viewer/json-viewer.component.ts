import { Component, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Segment } from './Segment';


@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css']
})

export class JsonViewerComponent  {

  constructor() { 
    this.segments = [];
  }

  @Input()
  json : Object;

  @Input()
  expanded : boolean;
  segments :Segment[];


  ngOnChanges(changes : SimpleChanges){
    const json : SimpleChange = changes.json;
    this.json = json.currentValue;
    if(JSON.stringify(json.previousValue) != JSON.stringify(json.currentValue)){
      this.segments = [];
    }

    if (typeof this.json === 'object') {
      Object.keys(this.json).forEach(function (key) {
          this.segments.push(this.parseKeyValue(key, this.json[key]));
      },this);
    }
  }


  //tells if the data structure can be expanded using a plus
  isExpandable(segment : Segment) : boolean{
    return segment.type === 'object' || segment.type === 'array';
  }


  // A toggling logic that changes segment.expanded, if segment.value is expandable type
  toggle(segment : Segment) : void{
    if (this.isExpandable(segment)) {
      segment.expanded = !segment.expanded;
  }
  }


  //a filter to set datatype of segment.value 
  parseKeyValue(key : string, value : any) : Segment{
    var segment : Segment;
    segment = {
      key : key,
      value : value,
      type : undefined,
      description : ''+ value,
      expanded : this.expanded
    }

    switch (typeof segment.value) {
      case 'number': {
          segment.type = 'number';
          break;
      }
      case 'boolean': {
          segment.type = 'boolean';
          break;
      }
      case 'function': {
          segment.type = 'function';
          break;
      }
      case 'string': {
          segment.type = 'string';
          segment.description = '"' + segment.value + '"';
          break;
      }
      case 'undefined': {
          segment.type = 'undefined';
          segment.description = 'undefined';
          break;
      }
      case 'object': {
          if (segment.value === null) {
              segment.type = 'null';
              segment.description = 'null';
          }
          else if (Array.isArray(segment.value)) {
              segment.type = 'array';
              segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
          }
          else if (segment.value instanceof Date) {
              segment.type = 'date';
          }
          else {
              segment.type = 'object';
              segment.description = 'Object ' + JSON.stringify(segment.value);
          }
          break;
      }
  }
  return segment;
  }

}
