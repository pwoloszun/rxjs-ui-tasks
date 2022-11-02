import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, startWith, map } from 'rxjs/operators';
import { sortBy } from 'lodash';

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

  private sortByValue$ = this.sortByCtrl.valueChanges.pipe(
    startWith(this.sortOptionsService.initialSortBy),
    map((sortByValue) => sortByValue === null ? '' : sortByValue),
    distinctUntilChanged(),
  );

  private ratesChanges$ = this.forexApiService
    .listenRatesChangesFor(FxCurrency.Usd, { frequency: 3000 });

  sortedRatesChanges$ = combineLatest([
    this.ratesChanges$,
    this.sortByValue$,
  ]).pipe(
    map(([rates, sortByValue]) => {
      return sortBy(rates, (rate) => (rate as any)[sortByValue]);
    })
  );

  constructor(
    private forexApiService: ForexApiService,
    private sortOptionsService: ForexSortOptionsService
  ) { }

  ngOnInit(): void { }

}
