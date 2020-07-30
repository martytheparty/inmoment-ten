import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  seconds = 0;

  constructor() { }

  ngOnInit(): void {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(
      (seconds) => {
        this.seconds++;
      }
    );
  }

  resetTimer() {
    this.seconds = 0;
  }

}
