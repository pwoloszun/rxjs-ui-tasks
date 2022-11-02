import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '@shared/custom-material';

import { MenuSectionComponent } from './menu-section.component';

@NgModule({
  declarations: [
    MenuSectionComponent
  ],
  exports: [
    MenuSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // ui
    CustomMaterialModule
  ]
})
export class MenuSectionModule { }
