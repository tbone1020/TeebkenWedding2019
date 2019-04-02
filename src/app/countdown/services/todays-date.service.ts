import { Injectable } from '@angular/core';

@Injectable()
export class TodaysDateService {
 
  constructor() { 

  }

  getCurrentTime(): any {
    return new Date();
  }


}
