import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

import { SearchApiService } from '@api/search-api.service';

const MIN_SEARCH_QUERY_LENGTH = 2;

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchTextCtrl = new FormControl('');

  // TODO
  queryValueChanges$ = this.searchTextCtrl.valueChanges;

  // TODO
  searchResults$ = of([
    'res 11',
    'res 12',
    'res 13',
  ]);

  constructor(private searchApiService: SearchApiService) { }

}
