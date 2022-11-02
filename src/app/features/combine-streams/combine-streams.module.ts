import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '@shared/custom-material';
import { VideoPlayerModule } from '@shared/video-player';

import { CombineStreamsRoutingModule } from './combine-streams-routing.module';
import { CurrencyExchangePageComponent } from './pages/currency-exchange-page/currency-exchange-page.component';
import { LazyForexPageComponent } from './pages/lazy-forex-page/lazy-forex-page.component';

@NgModule({
  declarations: [
    CurrencyExchangePageComponent,
    LazyForexPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // routing
    CombineStreamsRoutingModule,
    // ui
    CustomMaterialModule,
    VideoPlayerModule,
  ]
})
export class CombineStreamsModule { }
