import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenPageComponent } from './fullscreen-page.component';

describe('FullscreenPageComponent', () => {
  let component: FullscreenPageComponent;
  let fixture: ComponentFixture<FullscreenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullscreenPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
