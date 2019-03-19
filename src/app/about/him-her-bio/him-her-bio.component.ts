import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-him-her-bio',
  templateUrl: './him-her-bio.component.html',
  styleUrls: ['./him-her-bio.component.css']
})
export class HimHerBioComponent implements OnInit {
  @Input() selfImagePath: string;
  @Input() name: string;
  @Input() job: string;
  @Input() likes: string;
  @Input() spiritAnimal: string;

  constructor() {}

  ngOnInit() {}

}
