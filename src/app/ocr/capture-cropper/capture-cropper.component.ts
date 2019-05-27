import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Capture } from '@shared/models/capture.model';

@Component({
  selector: 'app-capture-cropper',
  templateUrl: './capture-cropper.component.html',
  styleUrls: ['./capture-cropper.component.sass']
})
export class CaptureCropperComponent implements OnInit {

  @Input()
  capture: Capture;

  public captureDataURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.ReadCaptureFile();
  }

  private ReadCaptureFile() {
    const reader = new FileReader();
    reader.onloadend = (e) => this.SetReaderResultToCaptureDataUrl(e.target as FileReader);
    reader.readAsDataURL(this.capture.File);
  }

  SetReaderResultToCaptureDataUrl(reader: FileReader) {
    this.captureDataURL = this._sanitizer.bypassSecurityTrustResourceUrl(reader.result as string);
  };
}
