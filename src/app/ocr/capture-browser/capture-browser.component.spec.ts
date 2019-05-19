import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureBrowserComponent } from './capture-browser.component';

describe('CaptureBrowserComponent', () => {
  let component: CaptureBrowserComponent;
  let fixture: ComponentFixture<CaptureBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
