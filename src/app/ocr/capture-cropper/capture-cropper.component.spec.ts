import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ICapture } from "@shared/models/capture.model";
import { CaptureCropperComponent } from "./capture-cropper.component";

describe("CaptureCropperComponent", () => {
  let component: CaptureCropperComponent;
  let fixture: ComponentFixture<CaptureCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureCropperComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureCropperComponent);
    component = fixture.componentInstance;
    const file = new File([], "");
    component.capture = {File: file} as ICapture;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    var stuff = 1;
    console.log(stuff);
  });
});
