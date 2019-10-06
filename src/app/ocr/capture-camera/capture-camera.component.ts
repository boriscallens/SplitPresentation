import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from, of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-capture-camera',
  templateUrl: './capture-camera.component.html',
  styleUrls: ['./capture-camera.component.sass']
})
export class CaptureCameraComponent implements OnInit {
  @Output() CameraAvailable = new EventEmitter<boolean>();
  @Output() Camera: Observable<MediaStreamTrack>;

  public cameraStream: Observable<MediaStream>;

  constructor() { }

  ngOnInit() {
    const constraints = { video: { facingMode: 'environment' }, fake: true };
    this.cameraStream = from(navigator.mediaDevices.getUserMedia(constraints))
      .pipe(catchError(() => of<MediaStream>()));
  }

  processStream(mediaStream: MediaStream) {
    const video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => video.play();
  }
  handleNotAllowedOrRethrow(error: Error) {
    return of();
  }
}
