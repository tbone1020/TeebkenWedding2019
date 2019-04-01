import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  private weddingDate: Date = new Date("May, 26, 2019");
  private todaysDate: Date = new Date();

  constructor() {}

  ngOnInit() {
    this.setMonthsTillWedding();
  }
  
  setMonthsTillWedding(): void {
    console.log(`Today's date ${this.todaysDate.getMonth() + 1}`);
    console.log(`Wedding's date ${this.weddingDate.getMonth() + 1}`);
  }

  setDaysTillWedding(): any {

  }
  
  setHoursTillWedding(): any {

  }

  setMinutesTillWedding(): any {

  }

  setSecondsTillWedding(): any {

  }

}
