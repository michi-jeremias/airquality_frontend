import { TestBed } from '@angular/core/testing';

import { FetchfileService } from './fetchfile.service';

describe('FetchfileService', () => {
  let service: FetchfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
