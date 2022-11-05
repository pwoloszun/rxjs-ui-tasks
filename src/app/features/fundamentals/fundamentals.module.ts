import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetModule } from '@ngrx/component';

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
    LetModule,
    // routing
    FundamentalsRoutingModule,
  ]
})
export class FundamentalsModule { }
