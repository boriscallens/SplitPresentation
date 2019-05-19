import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-browser',
  templateUrl: './capture-browser.component.html',
  styleUrls: ['./capture-browser.component.sass']
})
export class CaptureBrowserComponent implements OnInit {

  // @Output


  constructor() { }

  ngOnInit() {
    var input = document.querySelector('#captureBrowserInput');
    input.addEventListener('change', this.updateImageDisplay);
  }

  private updateImageDisplay(event: Event) {
    console.log('boerderij', event);
  }
}
