import { TestBed } from '@angular/core/testing';

import { MyDocVerificationService } from './my-doc-verification.service';

describe('MyDocVerificationService', () => {
  let service: MyDocVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDocVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
