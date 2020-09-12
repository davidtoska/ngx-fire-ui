import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuPageComponent } from './context-menu-page.component';

describe('ContextMenuPageComponent', () => {
  let component: ContextMenuPageComponent;
  let fixture: ComponentFixture<ContextMenuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContextMenuPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
