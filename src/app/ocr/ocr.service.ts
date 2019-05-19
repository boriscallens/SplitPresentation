import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Capture } from '@shared/models/capture.model';
import { Ticket } from '@shared/models/ticket.model';
import { Bill } from '@shared/models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  private _capture$ = new Subject<Capture>();
  private _ticket$ = new Subject<Ticket>();
  private _bill$ = new Subject<Bill>();

  public get capture$(): Observable<Capture> {
    return this._capture$.asObservable().pipe(filter(capture => !!capture));
  }
  public get ticket$(): Observable<Ticket> {
    return this._ticket$.asObservable().pipe(filter(ticket => !!ticket));
  }
  public get bill$(): Observable<Bill> {
    return this._bill$.asObservable().pipe(filter(bill => !!bill));
  }

  constructor() { 
    this.capture$.subscribe(x => console.log(x));
  }

  SelectFile(file: File) {
    this._capture$.next({File: file});
  }
}
