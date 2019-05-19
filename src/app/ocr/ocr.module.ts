import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureComponent } from './capture/capture.component';
import { CaptureCropperComponent } from './capture-cropper/capture-cropper.component';

@NgModule({
  declarations: [CaptureComponent, CaptureCropperComponent],
  imports: [
    CommonModule
  ]
})
export class OcrModule { }
