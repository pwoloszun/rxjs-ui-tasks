import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, Subject, distinctUntilChanged } from 'rxjs';
import { orderBy } from 'lodash';

import { ForexApiService, FxCurrency } from '@api/forex-api.service';

import { ForexSortOptionsService } from '../../services/forex-sort-options.service';
import { exhaustMap, map, startWith, withLatestFrom } from 'rxjs/operators';

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

  get orderOptions() {
    return this.sortOptionsService.getOrderOptions();
  }

  sortByCtrl = new FormControl(this.sortOptionsService.initialSortBy);
  orderCtrl = new FormControl(this.sortOptionsService.initialOrder);

  updateBtnClick$ = new Subject<void>();
  sortBtnClick$ = new Subject<void>();


  // TODO tmp remove
  orderValueChanges$ = this.orderCtrl.valueChanges;
  // TODO tmp remove
  sortByValueChanges$ = this.sortByCtrl.valueChanges;


  // TODO 1:
  // + every time updateBtn clicked
  // + should ONCE emit current rates for: FxCurrency.Usd (use: forexApiService)
  rates$ = this.updateBtnClick$.pipe(
    exhaustMap(() => this.forexApiService.getCurrentRatesFor(FxCurrency.Usd))
  );

  // TODO 2:
  //  + should start with: sortOptionsService.initialSortBy
  //  + should not emit until value changed
  sortByValue$ = this.sortByCtrl.valueChanges.pipe(
    startWith(this.sortOptionsService.initialSortBy),
    distinctUntilChanged()
  );

  // TODO 3:
  //  + should start with: sortOptionsService.initialOrder
  //  + should not emit until value changed
  orderValue$ = this.orderCtrl.valueChanges.pipe(
    startWith(this.sortOptionsService.initialOrder),
    distinctUntilChanged()
  );

  // TODO 4:
  // + every time sortBtn clicked
  // + should emit array: [currentSortBy, currentOrder]
  sortInfo$ = this.sortBtnClick$.pipe(
    startWith(undefined),
    withLatestFrom(this.sortByValue$, this.orderValue$),
    map(([_, currSortBy, currOrder]) => [currSortBy, currOrder])
  );

  // TODO 5:
  // + should emit every time either rates or full sortInfo changes
  // + should order rates based on full sortInfo (sortBy, order)
  // see: orderBy function on https://lodash.com/docs
  sortedRatesChanges$ = of([]);

  constructor(
    private forexApiService: ForexApiService,
    private sortOptionsService: ForexSortOptionsService
  ) { }

  ngOnInit(): void { }

}
