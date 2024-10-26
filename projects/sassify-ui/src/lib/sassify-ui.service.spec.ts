import { TestBed } from '@angular/core/testing';

import { SassifyUiService } from './sassify-ui.service';

describe('SassifyUiService', () => {
  let service: SassifyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SassifyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
