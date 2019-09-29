import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureComponent } from './capture.component';
import { OcrModule } from '../ocr.module';

describe('CaptureComponent', () => {
  let component: CaptureComponent;
  let fixture: ComponentFixture<CaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OcrModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
