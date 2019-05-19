import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureComponent } from './capture/capture.component';
import { CaptureCropperComponent } from './capture-cropper/capture-cropper.component';
import { CaptureBrowserComponent } from './capture-browser/capture-browser.component';

@NgModule({
  declarations: [CaptureComponent, CaptureCropperComponent, CaptureBrowserComponent],
  imports: [
    CommonModule
  ]
})
export class OcrModule { }
