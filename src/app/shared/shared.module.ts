import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from './models/ticket.model';
import { Capture } from './models/capture.model';
import { Bill } from './models/bill.model';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Capture,
    Ticket,
    Bill
  ],
  exports: [
    Capture,
    Ticket,
    Bill
  ]
})
export class SharedModule { }
