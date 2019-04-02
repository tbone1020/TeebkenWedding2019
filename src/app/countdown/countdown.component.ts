import { Component, OnInit } from '@angular/core';
import { TodaysDateService } from './services/todays-date.service';
import { WeddingDateService } from './services/wedding-date.service';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  providers: [TodaysDateService, WeddingDateService]
})
export class CountdownComponent implements OnInit {

  public daysTillWedding: number;
  public hoursTillWedding: number;
  public minutesTillWedding: number;
  public secondsTillWedding: number;

  constructor(private todaysDate: TodaysDateService, private weddingDate: WeddingDateService) {
  }

  ngOnInit() {
    this.startClockTick();
  }

  startClockTick(): void {
    const clockTick = setInterval(() => {
      this.setSecondsTillWedding();
      this.setMinutesTillWedding();
      this.setHoursTillWedding();
      this.setDaysTillWedding();
      this.fineTuneTimes();
    }, 1000);
  }

  setSecondsTillWedding(): void {
    this.secondsTillWedding = Math.floor((this.weddingDate.getWeddingTime() - this.todaysDate.getCurrentTime()) / 1000);
  }

  setMinutesTillWedding(): void {
    this.minutesTillWedding = Math.floor(this.secondsTillWedding / 60);
  }
  
  setHoursTillWedding(): void {
    this.hoursTillWedding = Math.floor(this.minutesTillWedding / 60);
  }

  setDaysTillWedding(): void {
    this.daysTillWedding = Math.floor(this.hoursTillWedding / 24);
  }

  fineTuneTimes(): void {
    this.hoursTillWedding = this.hoursTillWedding - (this.daysTillWedding * 24);
    this.minutesTillWedding = this.minutesTillWedding - (this.daysTillWedding * 24 * 60) - (this.hoursTillWedding * 60);
    this.secondsTillWedding = this.secondsTillWedding - (this.daysTillWedding * 24 * 60 * 60) - (this.hoursTillWedding * 60 * 60) - (this.minutesTillWedding * 60);
  }

}
