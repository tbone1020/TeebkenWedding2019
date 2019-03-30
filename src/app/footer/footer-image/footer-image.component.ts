import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer-image',
  templateUrl: './footer-image.component.html',
  styleUrls: ['./footer-image.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterImageComponent implements OnInit {

  @Input() imagePath: string;
  @Input() text: string;
  @Input() position: string;
  @Input() modifier: string
  @Input() width: number;

  constructor() {

  }

  ngOnInit() {
  }

}
