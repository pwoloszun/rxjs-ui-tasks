import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '@shared/custom-material';
import { ErrorModalModule } from '@shared/error-modal';

import { FlatteningOperatorsRoutingModule } from './flattening-operators-routing.module';
import { DownloadCatchRetryPageComponent } from './pages/download-catch-retry-page/download-catch-retry-page.component';
import { LiveSearchPageComponent } from './pages/live-search-page/live-search-page.component';
import { MySearchComponent } from './components/my-search/my-search.component';
import { GetUserComponent } from './components/get-user/get-user.component';

@NgModule({
  declarations: [
    DownloadCatchRetryPageComponent,
    LiveSearchPageComponent,
    MySearchComponent,
    GetUserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // routing
    FlatteningOperatorsRoutingModule,
    // ui
    CustomMaterialModule,
    ErrorModalModule,
  ]
})
export class FlatteningOperatorsModule { }
