import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent {

  constructor() { }
  
  @Input('personData') _personData: any;
}
