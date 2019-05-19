import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capture-cropper',
  templateUrl: './capture-cropper.component.html',
  styleUrls: ['./capture-cropper.component.sass']
})
export class CaptureCropperComponent implements OnInit {

  @Input()
  Image: ImageBitmap;

  constructor() { }

  ngOnInit() {
    
  }
}
