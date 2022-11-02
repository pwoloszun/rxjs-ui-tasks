import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DownloadCatchRetryPageComponent } from './pages/download-catch-retry-page/download-catch-retry-page.component';
import { LiveSearchPageComponent } from './pages/live-search-page/live-search-page.component';

const routes: Routes = [
  { path: 'download-catch-retry', component: DownloadCatchRetryPageComponent },
  { path: 'live-search', component: LiveSearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatteningOperatorsRoutingModule { }
