import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('addressData')
  _addressData: any;
}
