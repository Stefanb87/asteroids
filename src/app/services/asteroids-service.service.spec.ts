import { TestBed } from '@angular/core/testing';

import { AsteroidsServiceService } from './asteroids-service.service';

describe('AsteroidsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsteroidsServiceService = TestBed.get(AsteroidsServiceService);
    expect(service).toBeTruthy();
  });
});
