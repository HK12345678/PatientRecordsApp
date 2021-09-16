import { TestBed } from '@angular/core/testing';

import { IpappService } from './ipapp.service';

describe('IpappService', () => {
  let service: IpappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
