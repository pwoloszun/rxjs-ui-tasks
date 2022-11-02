import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { sortBy, orderBy } from 'lodash';

import { ForexApiService, FxCurrency } from '@api/forex-api.service';

import { ForexSortOptionsService } from '../../services/forex-sort-options.service';

@Component({
  selector: 'app-currency-exchange-page',
  templateUrl: './currency-exchange-page.component.html',
})
export class CurrencyExchangePageComponent implements OnInit {

  get colLabels() {
    return this.sortOptionsService.getLabels();
  }

  get sortByOptions() {
    return this.sortOptionsService.getSortByOptions();
  }

  sortByCtrl = new FormControl(this.sortOptionsService.initialSortBy);

  // TODO: tmp remove
  sortByValueChanges$ = this.sortByCtrl.valueChanges;

  // TODO 1: define ratesChanges$ use forexApiService

  // TODO 2: define sortByValue$
  //  + should start with: sortOptionsService.initialSortBy
  //  + should not emit until value changed

  // TODO 3: define sortedRatesChanges$ - should emmit every time either rates or sortBy changes

  constructor(
    private forexApiService: ForexApiService,
    private sortOptionsService: ForexSortOptionsService
  ) { }

  ngOnInit(): void { }

}
