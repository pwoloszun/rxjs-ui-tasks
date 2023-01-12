import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchAll, switchMap } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';
import { liveSearch } from '@shared/operators/live-search';

const MIN_SEARCH_QUERY_LENGTH = 3;

// debounceTime
// distinctUntilChanged

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('', { nonNullable: true });

  // TODO 2:
  // listen to seearchText value changes
  // - perform search using searchApiService.querySearch$(`some text`)
  //    - "CANCEL" previous search every time new search query arrives
  // - debounce 800
  // - ignore if query did not change
  // - ignore if query length < 3
  //
  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    debounceTime(800),
    filter((query) => query.length >= MIN_SEARCH_QUERY_LENGTH),
    distinctUntilChanged(),
    switchMap((query) => this.searchApiService.querySearch$(query))
  );

  searchResults_REFACTORED$ = this.searchTextCtrl.valueChanges.pipe(
    liveSearch(800, (query) => this.searchApiService.querySearch$(query))
  );

  constructor(private searchApiService: SearchApiService) { }

}
