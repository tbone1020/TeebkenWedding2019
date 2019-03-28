import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailsComponent implements OnInit {

  @Input() name: string;
  @Input() phoneNumber: string;
  @Input() email: string;
  @Input() facebook: string;
  @Input() instagram: string;

  constructor() { }

  ngOnInit() {
  }

}
