import { TestBed, inject } from '@angular/core/testing';

import { BrainstormingMapService } from './brainstorming-map.service';

describe('BrainstormingMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrainstormingMapService]
    });
  });

  it('should ...', inject([BrainstormingMapService], (service: BrainstormingMapService) => {
    expect(service).toBeTruthy();
  }));
});
