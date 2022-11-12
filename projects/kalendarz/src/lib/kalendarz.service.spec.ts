import { TestBed } from '@angular/core/testing';

import { KalendarzService } from './kalendarz.service';

describe('KalendarzService', () => {
  let service: KalendarzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KalendarzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
