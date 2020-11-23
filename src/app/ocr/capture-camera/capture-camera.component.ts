import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-capture-camera',
  templateUrl: './capture-camera.component.html',
  styleUrls: ['./capture-camera.component.scss']
})
export class CaptureCameraComponent implements OnInit {

  @Output() CameraAvailable = new EventEmitter<boolean>();
  @Output() Camera: Observable<MediaStreamTrack>;

  @ViewChild('video') video: ElementRef;

  public cameraStream: Observable<MediaStream>;

  constructor(
    private el: ElementRef) {

    // @ts-ignore
    const obs = new ResizeObserver(entry => {
      console.log("entry", entry);
    });
  }

  ngOnInit() {
    const constraints = { video: { facingMode: 'environment' }, audio: false };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => this.setVideoSize(stream))
      .then((stream) => this.processStream(stream))
      .catch((error => console.error('could not request camera', error)));
  }

  setVideoSize(stream: MediaStream): MediaStream {
    const settings = stream.getVideoTracks()[0].getSettings();
    const videoHeight = settings.height;
    const videoWidth = settings.width;
    const containerHeight = this.el.nativeElement.offsetHeight;
    const containerWidth = this.el.nativeElement.offsetWidth;

    const widthRatio = containerWidth / videoWidth;
    const heightRatio = containerHeight / videoHeight;
    const constrained = Math.min(widthRatio, heightRatio);
    this.video.nativeElement.style.width = videoWidth * constrained + "px";
    this.video.nativeElement.style.height = videoHeight * constrained + "px";

    return stream;
  }

  processStream(mediaStream: MediaStream) {
    this.video.nativeElement.srcObject = mediaStream;
    this.video.nativeElement.onloadedmetadata = () => this.video.nativeElement.play();
    return mediaStream;
  }

  onResizeVideo() {
    console.log("video resize");
  }
}
