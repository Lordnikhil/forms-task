import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges {

  @Input() formItem;
  @Output() itemTobeEdited = new EventEmitter<object>();

  formItemsArray = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log(propName);
      const chng = changes[propName];
      const cur = chng.currentValue
      if(propName == "formItem" && cur){
        this.formItemsArray.push(cur)
      }
    }
  }

  sentItemTobeEdited(i){
    //console.log(this.formItemsArray[i]);
    this.itemTobeEdited.emit(this.formItemsArray[i])
    this.formItemsArray.splice(i,1);
  }

}
