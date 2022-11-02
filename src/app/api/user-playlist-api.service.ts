import { Injectable } from '@angular/core';

import { DataApiService, DtoParams } from '@api/data-api.service';

export interface UserPlaylistDto {
  id: number;
  userId: number;
  videoIds: number[];
}

export type UserPlaylistDtoParams = DtoParams<UserPlaylistDto>;

@Injectable({
  providedIn: 'root'
})
export class UserPlaylistApiService extends DataApiService<UserPlaylistDto> {

  override getUrl(): string {
    return '/api/user-playlists';
  }
}
