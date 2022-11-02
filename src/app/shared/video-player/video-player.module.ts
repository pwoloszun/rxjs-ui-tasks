import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  declarations: [
    VideoPlayerComponent
  ],
  exports: [
    VideoPlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideoPlayerModule { }
