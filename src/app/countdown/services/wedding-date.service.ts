import { Injectable } from '@angular/core';

@Injectable()
export class WeddingDateService {
  weddingDate: Date;

  constructor() { 
    this.weddingDate = new Date("May, 31, 2019");
  }

  getWeddingTime(): any {
    return this.weddingDate;
  }

}
