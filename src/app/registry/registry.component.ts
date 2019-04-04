import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  // @ViewChild('registry') registry: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  showRegistry(el: HTMLElement): void {
    console.log(el);
  }

}
