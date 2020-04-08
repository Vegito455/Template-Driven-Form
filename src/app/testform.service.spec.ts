import { TestBed } from '@angular/core/testing';

import { TestformService } from './testform.service';

describe('TestformService', () => {
  let service: TestformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
