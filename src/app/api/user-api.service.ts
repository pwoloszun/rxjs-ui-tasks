import { Injectable } from '@angular/core';

import { DataApiService, DtoParams } from '@api/data-api.service';

export interface UserDto {
  id: number;
  name: string;
  description?: string;
}

export type UserDtoParams = DtoParams<UserDto>;

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends DataApiService<UserDto> {

  override getUrl(): string {
    return '/api/users';
  }
}
