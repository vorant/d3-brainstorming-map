import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainstormingMapComponent } from './brainstorming-map.component';

describe('BrainstormingMapComponent', () => {
  let component: BrainstormingMapComponent;
  let fixture: ComponentFixture<BrainstormingMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainstormingMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainstormingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
