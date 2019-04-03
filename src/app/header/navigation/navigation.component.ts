import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  scrollSectionIntoView(target: HTMLElement): void {
    console.log(target);
    // $target.scrollIntoView({
    //   behavior: "smooth", 
    //   block: "start", 
    //   inline: "nearest"
    // });
  }

}
