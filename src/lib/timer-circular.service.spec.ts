import { TestBed } from '@angular/core/testing';

import { TimerCircularService } from './timer-circular.service';

describe('TimerCircularService', () => {
  let service: TimerCircularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerCircularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
