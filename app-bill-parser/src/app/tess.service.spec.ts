import { TestBed } from '@angular/core/testing';

import { TessService } from './tess.service';

describe('TessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TessService = TestBed.get(TessService);
    expect(service).toBeTruthy();
  });
});
