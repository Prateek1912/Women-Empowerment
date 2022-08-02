import { TestBed } from '@angular/core/testing';

import { AdminTraineesService } from './admin-trainees.service';

describe('AdminTraineesService', () => {
  let service: AdminTraineesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTraineesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
