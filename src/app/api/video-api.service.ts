import { Injectable } from '@angular/core';

import { DataApiService, DtoParams } from '@api/data-api.service';

export interface VideoDto {
  id: number;
  authorId: number;
  title: string;
  description: string;
  duration: number;
  posterUrl: string;
  videoUrl: string;
  createdAt: number;
}

export type VideoDtoParams = DtoParams<VideoDto>;

@Injectable({
  providedIn: 'root'
})
export class VideoApiService extends DataApiService<VideoDto> {

  override getUrl(): string {
    return '/api/videos';
  }
}
