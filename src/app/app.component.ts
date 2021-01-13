import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemToEdit;
  @Output() newItemEvent = new EventEmitter<string>();
  
  title = 'forms-task';
  itemRecivedFromForm: object;
  sendItemToDisplay(item){
    console.log(item)
    this.itemRecivedFromForm = item;
  }

  sendItemToEdit(item){
    //console.log(item);
    this.itemToEdit = item;
  }
  
}
