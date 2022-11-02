import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorModalComponent } from './error-modal.component';

@NgModule({
  declarations: [ErrorModalComponent],
  exports: [ErrorModalComponent],
  entryComponents: [ErrorModalComponent],
  imports: [
    CommonModule
  ],
})
export class ErrorModalModule { }
