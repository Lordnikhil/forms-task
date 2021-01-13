import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() formData: object;
  @Output() sentFormData: object;
  

  constructor() { }

  ngOnInit(): void {
  }

  submitDetails(){

  }

}
