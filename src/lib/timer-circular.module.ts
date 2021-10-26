import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TimerCircularComponent } from './timer-circular.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    TimerCircularComponent
  ],
  imports: [
    MatProgressSpinnerModule
  ],
  exports: [
    TimerCircularComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimerCircularModule { }
