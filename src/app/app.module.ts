import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from '@shared/custom-material';
import { MenuSectionModule } from '@shared/menu-section';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // routing
    AppRoutingModule,
    // ui
    CustomMaterialModule,
    MenuSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
