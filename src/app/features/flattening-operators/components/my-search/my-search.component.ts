import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchApiService } from '@api/search-api.service';
import { filter, map, of, switchMap, debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const MIN_SEARCH_QUERY_LENGTH = 2;

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  // TODO
  // min length: MIN_SEARCH_QUERY_LENGTH
  // throttle/debounce 1200
  // ignore if query did not change:
  // send req
  // handle ONLY latest req + cancel previous req
  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    map((query) => query === null ? '' : query),
    debounceTime(1200),
    filter((q) => q.length > MIN_SEARCH_QUERY_LENGTH),
    distinctUntilChanged(),
    switchMap((query: string) => this.searchApiService.querySearch$(query))
  );

  constructor(private searchApiService: SearchApiService) { }

}
