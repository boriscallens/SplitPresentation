import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ICapture } from '@shared/models/capture.model';

@Component({
  selector: 'app-capture-cropper',
  styleUrls: ['./capture-cropper.component.sass'],
  templateUrl: './capture-cropper.component.html',
})
export class CaptureCropperComponent implements OnInit, AfterViewInit {
  @Input()
  public capture: ICapture;

  @ViewChild('cropperCanvas')
  public cropperCanvas: ElementRef;

  public captureDataURL: SafeResourceUrl;
  public image = new Image();

  constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit() {
    this.ReadCaptureFile();
  }

  public ngAfterViewInit(): void {
    this.image.onload = (e) => {
      const canvas = ( this.cropperCanvas.nativeElement as HTMLCanvasElement);
      const img = e.target as HTMLImageElement;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d').drawImage(img, 0, 0);
    };
  }

  private ReadCaptureFile() {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => this.captureDataURL =
      this.sanitizer.bypassSecurityTrustResourceUrl((e.target as FileReader).result as string));
    reader.addEventListener('loadend', (e) => this.image.src = (e.target as FileReader).result as string);
    reader.readAsDataURL(this.capture.File);
  }
}
