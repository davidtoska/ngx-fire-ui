import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenLandingpageComponent } from './fullscreen-landingpage.component';

describe('FullscreenLandingpageComponent', () => {
  let component: FullscreenLandingpageComponent;
  let fixture: ComponentFixture<FullscreenLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
