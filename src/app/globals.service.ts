import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  point = 0;
  scoreGain = '';
  constructor() { }

  pointCount (set) {

    if (set === '+') {
      this.point += 5;
      this.scoreGain = '  est dans le mot : +5 points!';
    } else if (set === '-') {
      this.point -= 5;
      this.scoreGain = '  n\'est pas dans le mot : -5 points!';
    } else if (set === '~') {
      this.point -= 1;
      this.scoreGain = '  est déjà compris dans le mot ! Pénalité : -1 point!';
    }


  }
}
