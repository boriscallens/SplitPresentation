import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureComponent } from './capture/capture.component';
import { CaptureCropperComponent } from './capture-cropper/capture-cropper.component';
import { CaptureBrowserComponent } from './capture-browser/capture-browser.component';
import { CaptureCameraComponent } from './capture-camera/capture-camera.component';

@NgModule({
  declarations: [
    CaptureComponent,
    CaptureCropperComponent,
    CaptureBrowserComponent,
    CaptureCameraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OcrModule { }
