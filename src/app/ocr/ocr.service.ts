import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';

import { Bill } from '@shared/models/bill.model';
import { ICapture } from '@shared/models/capture.model';
import { Ticket } from '@shared/models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class OcrService {

  private _capture$ = new Subject<ICapture>();
  private _ticket$ = new Subject<Ticket>();
  private _bill$ = new Subject<Bill>();

  public get capture$(): Observable<ICapture> {
    return this._capture$.asObservable().pipe(filter((capture) => !!capture), shareReplay(1));
  }
  public get ticket$(): Observable<Ticket> {
    return this._ticket$.asObservable().pipe(filter((ticket) => !!ticket));
  }
  public get bill$(): Observable<Bill> {
    return this._bill$.asObservable().pipe(filter((bill) => !!bill));
  }

  constructor() {
    this.capture$.subscribe((x) => console.log('ocrService', x));
  }

  public SelectFile(file: File) {
    this._capture$.next({File: file});
  }
}
