import { TestBed } from '@angular/core/testing';

import { AuthenticatinService } from './authenticatin.service';

describe('AuthenticatinService', () => {
  let service: AuthenticatinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticatinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
