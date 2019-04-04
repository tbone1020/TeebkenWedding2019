import { Component, OnInit, Input } from '@angular/core';
import { RegistryComponent } from '../../registry/registry.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollSectionIntoView($target: HTMLElement): void {
    // target.scrollIntoView({
    //   behavior: "smooth", 
    //   block: "start", 
    //   inline: "nearest"
    // });
  }

}
