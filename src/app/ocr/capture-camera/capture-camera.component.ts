import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-capture-camera',
  templateUrl: './capture-camera.component.html',
  styleUrls: ['./capture-camera.component.sass']
})
export class CaptureCameraComponent implements OnInit {

  @Output() CameraAvailable = new EventEmitter<boolean>();
  @Output() Camera: Observable<MediaStreamTrack>;

  @ViewChild('video') video: ElementRef;

  public cameraStream: Observable<MediaStream>;

  constructor() { }

  ngOnInit() {
    const constraints = { video: { facingMode: 'environment' }, audio: false};

    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => this.processStream(stream))
    .catch((error => console.error('could not request camera', error)));
  }

  processStream(mediaStream: MediaStream) {
    this.video.nativeElement.srcObject = mediaStream;
    this.video.nativeElement.onloadedmetadata = () => this.video.nativeElement.play();
  }
}
