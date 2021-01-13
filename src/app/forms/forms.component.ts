import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnChanges {

  @Input() formData: object;
  @Output() sentFormData = new EventEmitter<object>();

  name:string = "";
  number: number;
  address: string = "";
  check: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = chng.currentValue
      if(propName=="formData"){
        //console.log(cur)
        this.editItemInForm(cur)
      }
      const prev = JSON.stringify(chng.previousValue);
      //console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  editItemInForm(item){
    if(item){
      console.log(item)
      this.name = item.name;
      this.number = item.number;
      this.address = item.address;
      this.check = item.check;
    }
  }


  submitDetails(){
    
    if(this.name && this.number && this.address){
      console.log(this.name)
      console.log(this.number)
      console.log(this.address)
      console.log(this.check)
      this.sentFormData.emit({
        "name":this.name,
        "number":this.number,
        "address":this.address,
        "check":this.check,
        "edit":false
      });
      this.clearForm();
    }
    
  }

  clearForm(){
    this.name = ""
    this.number = null
    this.address = ""
    this.check = false
  }

}
