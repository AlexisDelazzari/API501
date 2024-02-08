import { TestBed } from '@angular/core/testing';

import { UpdateTokenService } from './update-token.service';

describe('UpdateTokenService', () => {
  let service: UpdateTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
