import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, of } from 'rxjs';

// debounceTime
// distinctUntilChanged


import { SearchApiService } from '@api/search-api.service';
import { debounceTime, switchMap, distinctUntilChanged, filter } from 'rxjs/operators';

const MIN_SEARCH_QUERY_LENGTH = 3;

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    map((query) => query || ''),
    debounceTime(800),
    filter((query) => query.length >= MIN_SEARCH_QUERY_LENGTH),
    distinctUntilChanged(),
    switchMap((query) => this.searchApiService.querySearch$(query))
  );

  constructor(private searchApiService: SearchApiService) { }

}
