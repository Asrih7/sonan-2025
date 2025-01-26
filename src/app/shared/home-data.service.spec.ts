import { TestBed } from '@angular/core/testing';

import { DataServices } from './home-data.service';

describe('DataServices', () => {
  let service: DataServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
