import { TestBed } from '@angular/core/testing';

import { SwitchUrlService } from './switch-url.service';

describe('SwitchUrlService', () => {
  let service: SwitchUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
