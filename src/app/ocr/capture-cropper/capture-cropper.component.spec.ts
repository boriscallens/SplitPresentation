import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureCropperComponent } from './capture-cropper.component';

describe('CaptureCropperComponent', () => {
  let component: CaptureCropperComponent;
  let fixture: ComponentFixture<CaptureCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
