import { TestBed } from '@angular/core/testing';

import { OpenFoodService } from './open-food.service';

describe('OpenFoodService', () => {
  let service: OpenFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
