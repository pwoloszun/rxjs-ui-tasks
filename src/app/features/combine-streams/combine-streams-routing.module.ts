import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrencyExchangePageComponent } from './pages/currency-exchange-page/currency-exchange-page.component';
import { LazyForexPageComponent } from './pages/lazy-forex-page/lazy-forex-page.component';

const routes: Routes = [
  { path: 'currency-exchange', component: CurrencyExchangePageComponent },
  { path: 'lazy-forex', component: LazyForexPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombineStreamsRoutingModule { }
