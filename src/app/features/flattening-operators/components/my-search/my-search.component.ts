import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { SearchApiService } from '@api/search-api.service';

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

  // TODO
  queryValueChanges$ = this.searchTextCtrl.valueChanges;

  // TODO 2:
  // listen to seearchText value changes
  // - perform search using searchApiService.querySearch$(`some text`)
  //    - "CANCEL" previous search every time new search query arrives
  // - debounce 800
  // - ignore if query did not change
  // - ignore if query length < 3
  //
  searchResults$ = of([
    'res 11',
    'res 12',
    'res 13',
  ]);



  constructor(private searchApiService: SearchApiService) { }

}
