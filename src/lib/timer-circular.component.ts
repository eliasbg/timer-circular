import { formatNumber } from '@angular/common';
import { Component, EventEmitter, Inject, Input, LOCALE_ID, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'tc-timer-circular',
  template: `
  <div class="progress">
    <p>{{ time }}</p>    
    <mat-progress-spinner
      [mode]="'determinate'"
      [value]=count
      [strokeWidth]=2>  
    </mat-progress-spinner>
  </div>
  `,
  styles: [
    `
    .progress {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 100px;
      right: 80px;
      width: 100px;
      height: 100px;
      z-index: 10 !important;	
    }
    .progress p {
      margin: 0;
      align-self: center;
      font-family: Roboto;
      font-size: 30px;
    }
      
    .progress mat-progress-spinner {
      position: absolute;
      top: 0;
      align-self: center;
    }	  
  
  ::ng-deep .mat-progress-spinner circle, .mat-spinner circle {
      stroke: red !important;
  }
    `
  ]
})
export class TimerCircularComponent implements OnInit, OnDestroy {
  @Input() timeout = 10;
  @Input() path = '/start';

  @Output() finish = new EventEmitter<void>(); 

  protected subscription$ = new Subscription();
  countDown = 0;
  count = 0;

  constructor(
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit(): void {
    const responseTimer = timer(1000, 1000);
    this.subscription$.add(
      responseTimer.subscribe(
        (seg) => {
          this.countDown = this.timeout - seg;
          this.count = (seg*100)/this.timeout;
          if (this.count == 100) {
            this.subscription$.unsubscribe();
            this.finish.emit();
          }
        })
    );       
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  get time() { 
  var hours = Math.floor(this.countDown / 60);  
  var minutes = this.countDown % 60;
  return formatNumber(hours, this.locale, "2.0") + ":" + formatNumber(minutes, this.locale, "2.0");
}

}
