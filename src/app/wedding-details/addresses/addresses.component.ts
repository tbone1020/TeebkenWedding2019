import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css'],
  encapsulation: ViewEncapsulation.None;
})
export class AddressesComponent implements OnInit {

  @Input() name: string;
  @Input() location: string;
  @Input() address: string;
  @Input() cityStateZip: string;

  constructor() { }

  ngOnInit() {
  }

}
