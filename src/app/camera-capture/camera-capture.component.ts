import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.scss']
})
export class CameraCaptureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const constraints = { video: { facingMode: 'environment' }, fake: true };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.processStream)
      .catch((err) => {
        console.log(err);
        this.fakepicture();
      });
  }

  processStream(mediaStream: MediaStream) {
    const video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => video.play();
  }

  clearphoto() {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d');

    context.fillStyle = '#123';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL('image/png');
    const photo = document.getElementById('photo');

    photo.setAttribute('src', data);
  }

  public takepicture() {
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d');

    const video: HTMLVideoElement = document.querySelector('video');
    canvas.width = 320;
    canvas.height = 800;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL('image/png');
    const photo = document.getElementById('photo');
    photo.setAttribute('src', data);
  }
  public fakepicture() {
    console.log('faking');
    const photo = document.getElementById('photo');
    photo.setAttribute('src', '../assets/7wt1spzj.png');
  }
}
