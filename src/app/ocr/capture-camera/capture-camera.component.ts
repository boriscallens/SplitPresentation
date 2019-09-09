import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from, of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-capture-camera',
  templateUrl: './capture-camera.component.html',
  styleUrls: ['./capture-camera.component.sass']
})
export class CaptureCameraComponent implements OnInit {
  @Output() CameraAvailable = new EventEmitter<boolean>();
  @Output() Camera: Observable<MediaStreamTrack>;

  public cameraStream : Observable<MediaStream>;
  
  constructor() { }

  ngOnInit() {
    const constraints = { video: { facingMode: 'environment' }, fake: true };
    this.cameraStream = from(navigator.mediaDevices.getUserMedia(constraints));
    this.cameraStream.pipe(tap(x => console.log('boerderij', x)));
    // let stuff = from(navigator.mediaDevices.getUserMedia(constraints)).pipe(
    //   map((mediaStream) => this.processStream(mediaStream)),
    //   // map((mediaStream) => mediaStream.getVideoTracks()[0]),
    // );
    
    //  = cameraStream.pipe(map(stream => stream));
    
    //this.cameraStream.subscribe((stream) => this.processStream(stream));
    //   (error) => this.CameraAvailable.emit(false)
    // );

    // navigator.mediaDevices.getUserMedia(constraints)
    //   .then(x => {this.CameraAvailable.emit(true); return x})
    //   .then(this.processStream)
    //   .catch((err) => {
    //     // switch (err.constructor){
    //     //   default: 
    //     // }
    //     this.CameraAvailable.emit(false);
    //   });
  }

  processStream(mediaStream: MediaStream) {
    const video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => video.play();
  }
  handleNotAllowedOrRethrow(error: Error){
    // this.CameraAvailable.emit(false);
    return of();
  }
}
