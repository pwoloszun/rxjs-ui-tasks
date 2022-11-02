import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, startWith, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { orderBy } from 'lodash';

import { ForexApiService, FxCurrency } from '@api/forex-api.service';

import { ForexSortOptionsService } from '../../services/forex-sort-options.service';

@Component({
  selector: 'app-lazy-forex-page',
  templateUrl: './lazy-forex-page.component.html',
})
export class LazyForexPageComponent implements OnInit {

  get colLabels() {
    return this.sortOptionsService.getLabels();
  }

  get sortByOptions() {
    return this.sortOptionsService.getSortByOptions();
  }

  sortByCtrl = new FormControl(this.sortOptionsService.initialSortBy);
  sortByValue$ = this.sortByCtrl.valueChanges.pipe(
    startWith(this.sortOptionsService.initialSortBy),
    map((sortByValue) => sortByValue === null ? '' : sortByValue),
    distinctUntilChanged(),
  );

  get orderOptions() {
    return this.sortOptionsService.getOrderOptions();
  }

  orderCtrl = new FormControl(this.sortOptionsService.initialOrder);
  orderValue$ = this.orderCtrl.valueChanges.pipe(
    startWith(this.sortOptionsService.initialOrder),
    map((order) => order === null ? '' : order),
    distinctUntilChanged(),
  );

  updateRatesBtn$ = new Subject<void>();
  sortBtn$ = new BehaviorSubject<void>(undefined);

  private rates$ = this.updateRatesBtn$.pipe(
    switchMap(() => {
      return this.forexApiService
        .getCurrentRatesFor(FxCurrency.Usd);
    })
  );

  sortInfo$ = this.sortBtn$.pipe(
    withLatestFrom(this.sortByValue$, this.orderValue$),
    map(([_, sortByValue, orderValue]) => {
      return [sortByValue, orderValue];
    })
  );

  sortedRatesChanges$ = combineLatest([
    this.rates$,
    this.sortInfo$
  ]).pipe(
    map(([rates, sortInfo]) => {
      const [sortByValue, orderValue] = sortInfo;
      return orderBy(rates, [sortByValue], [orderValue as any]);
    })
  );

  constructor(
    private forexApiService: ForexApiService,
    private sortOptionsService: ForexSortOptionsService
  ) { }

  ngOnInit(): void { }

}
