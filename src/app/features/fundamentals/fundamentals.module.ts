import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundamentalsRoutingModule } from './fundamentals-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ObservableUiEventsPageComponent } from './pages/observable-ui-events-page/observable-ui-events-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ObservableUiEventsPageComponent
  ],
  imports: [
    CommonModule,
    FundamentalsRoutingModule
  ]
})
export class FundamentalsModule { }
