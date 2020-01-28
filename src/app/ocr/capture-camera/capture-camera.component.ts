import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, Directive, ElementRef } from '@angular/core';
import { from, of, Observable, } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-capture-camera',
  templateUrl: './capture-camera.component.html',
  styleUrls: ['./capture-camera.component.sass']
})
export class CaptureCameraComponent implements OnInit, AfterViewInit {

  @Output() CameraAvailable = new EventEmitter<boolean>();
  @Output() Camera: Observable<MediaStreamTrack>;

  @ViewChild('video', {static: false}) video: ElementRef;

  public cameraStream: Observable<MediaStream>;

  constructor() { }

  ngOnInit() {
    const constraints = { video: { facingMode: 'environment' }, fake: true };

    this.cameraStream = from(navigator.mediaDevices.getUserMedia(constraints))
      .pipe(catchError(() => of<MediaStream>()));
  }

  ngAfterViewInit(): void {
    this.cameraStream.subscribe(stream => this.processStream(stream));
  }

  processStream(mediaStream: MediaStream) {
    console.log('x');
    this.video.nativeElement.srcObject = mediaStream;
    this.video.nativeElement.onloadedmetadata = () => this.video.nativeElement.play();
  }
}
