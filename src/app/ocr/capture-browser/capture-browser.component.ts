import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-capture-browser',
  templateUrl: './capture-browser.component.html',
  styleUrls: ['./capture-browser.component.sass']
})
export class CaptureBrowserComponent implements OnInit {
  captureBrowserInput: HTMLInputElement;

  @Output() FileLoaded = new EventEmitter<File>();

  constructor() { }

  ngOnInit() {
    this.captureBrowserInput = document.querySelector('#captureBrowserInput');
  }

  public updateImageDisplay() {
    var file = this.captureBrowserInput.files[0];
    this.FileLoaded.emit(file);
  }
}
