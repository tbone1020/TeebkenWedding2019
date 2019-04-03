import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-party-pair',
  templateUrl: './party-pair.component.html',
  styleUrls: ['./party-pair.component.css']
})
export class PartyPairComponent implements OnInit {


  weddingParty: object[] = [{
    groomsSide: {
      image: "garrett.png",
      name: "Garrett Hickman",
      position: "Best Man"
    },
    brideSide: {
      image: "france.png", 
      name: "Frances Rubio", 
      position: "Maid Of Honor"
  }, {
    groomsSide: {
      image: "tanner.png", 
      name: "Tanner Teebken", 
      position: "Groomsman"
    },
    brideSide: {
      image: "deidre.png", 
      name: "Deidre Moseley", 
      position: "Bridesmaid"
    }
  }, {
    groomsSide: {
      image: "dominic.png", 
      name: "Dominic Towery", 
      position: "Groomsman"
    },
    brideSide: {
      image: "brenda.png", 
      name: "Brenda Sarkis", 
      position: "Bridesmaid"
    }
  }, {
    groomsSide: {
      image: "ryan.png", 
      name: "Ryan Dyer", 
      position: "Groomsman"
    },
    brideSide: {
      image: "simran.png", 
      name: "Simran Hothi", 
      position: "Bridesmaid"
    }
  }];
  
  currentPartyPair: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
