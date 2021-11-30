import { TestBed } from '@angular/core/testing';

import { TableContentService } from './table-content.service';

describe('TableContentService', () => {
  let service: TableContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
