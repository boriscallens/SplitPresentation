import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Capture } from '@shared/models/capture.model';

@Component({
  selector: 'app-capture-cropper',
  templateUrl: './capture-cropper.component.html',
  styleUrls: ['./capture-cropper.component.sass']
})
export class CaptureCropperComponent implements OnInit, AfterViewInit {
  @Input()
  capture: Capture;

  @ViewChild('cropperCanvas', {static: false})
  cropperCanvas: ElementRef;
  
  public captureDataURL: SafeResourceUrl;
  public image = new Image();

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.ReadCaptureFile();
  }

  ngAfterViewInit(): void {
    this.image.onloadend = (e) => {
      const canvas = (<HTMLCanvasElement>this.cropperCanvas.nativeElement);
      const img = e.target as HTMLImageElement;
      
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d').drawImage(img,0,0);
    };
  }

  private ReadCaptureFile() {
    const reader = new FileReader();  
    reader.addEventListener('loadend', (e) => this.captureDataURL = this._sanitizer.bypassSecurityTrustResourceUrl((e.target as FileReader).result as string));
    reader.addEventListener('loadend', (e) => this.image.src = (e.target as FileReader).result as string);
    reader.readAsDataURL(this.capture.File);
  }
}
