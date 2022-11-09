import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, map, filter, switchMap } from 'rxjs';

import { SearchApiService } from '@api/search-api.service';

const MIN_SEARCH_QUERY_LENGTH = 3;

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  // TODO 1B: on searchTextCtrl change - send REQ (usesearchApiService)
  // + handle only latest/newest REQ
  // TODO 2A: searchTextCtrl change requirements:
  // + skip if search query did not change
  // + debounce/throtttle by 800ms
  // + minimum search query legth: MIN_SEARCH_QUERY_LENGTH
  //
  // TODO 1A: render searchResults$
  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    filter((query) => query !== null),
    switchMap((query) => {
      const req$ = this.searchApiService.querySearch$(query!);
      return req$;
    })
  );

  constructor(private searchApiService: SearchApiService) { }

}
