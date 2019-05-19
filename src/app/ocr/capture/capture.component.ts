import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';
// import { isDevMode } from '@angular/core';

/*
 * Smart component to handle capturing the image of a bill
 * When camera available the camera will be used
 * When camera available but not allowed a brief explanation will explain why we can't use the camera
 * When camera disallowed or not present we'll allow the user to upload a picture
 * When in development environment provide a pre-scanned image
*/
@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.sass']
})
export class CaptureComponent implements OnInit {

  public cameraStream: MediaStream;

  constructor(private ocrService: OcrService) { }

  ngOnInit() {

  }
}
