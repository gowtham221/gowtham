import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['../../person/person-list/person-list.component.css']
})
export class AddressListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Output()
  adressSelected = new EventEmitter();

  addressJson: any;

  ngOnInit() {
    this.http.get('../../../assets/address.json').subscribe(data => {
      this.addressJson = data;
    });
  }

  onAddressRowClick(address){
    this.adressSelected.emit(address);
  }
}
