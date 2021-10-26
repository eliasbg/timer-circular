import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCircularComponent } from './timer-circular.component';

describe('TimerCircularComponent', () => {
  let component: TimerCircularComponent;
  let fixture: ComponentFixture<TimerCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
