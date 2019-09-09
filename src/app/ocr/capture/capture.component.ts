import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';

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

  public capture$ = this.ocrService.capture$

  constructor(private ocrService: OcrService) { }

  ngOnInit() { }

  onFileLoaded(file: File){
    this.ocrService.SelectFile(file);
  }
  onCameraSnapped(){
    console.log('snapped');
  }
}
