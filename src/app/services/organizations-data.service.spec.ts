import { TestBed } from '@angular/core/testing';

import { OrganizationsDataService } from './organizations-data.service';

describe('OrganizationsDataService', () => {
  let service: OrganizationsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
