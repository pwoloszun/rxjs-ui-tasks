import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, of } from 'rxjs';

// debounceTime
// distinctUntilChanged


import { SearchApiService } from '@api/search-api.service';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';

const MIN_SEARCH_QUERY_LENGTH = 2;

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  searchResults$ = this.searchTextCtrl.valueChanges.pipe(
    map((query) => query || ''),
    switchMap((query) => {
      const req$ = this.searchApiService.querySearch$(query);
      return req$;
    })
  );

  constructor(private searchApiService: SearchApiService) { }

}
