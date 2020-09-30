import { TestBed } from '@angular/core/testing';

import { FullscreenModalService } from './fullscreen-modal.service';

describe('FullscreenModalService', () => {
  let service: FullscreenModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullscreenModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
