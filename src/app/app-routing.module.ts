import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptureComponent } from './ocr/capture/capture.component';

const routes: Routes = [
  { path: '', redirectTo: '/capture', pathMatch: 'full' },
  {path: 'capture', component: CaptureComponent},
  // {path: 'ticket', component: TicketComponent},
  // {path: 'bill', component: BillComponent},
  // {path: 'split', component: SplitComponent},
  // {path: 'pay', component: PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
