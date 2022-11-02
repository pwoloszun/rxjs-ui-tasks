import { Injectable } from '@angular/core';
import { delay, interval, map, Observable, of } from 'rxjs';
import { FxCurrency, ALL_CURRENCIES, forexFakeApi, ICurrencyRate } from 'src/fake-libs/forex-fake-api';

export { FxCurrency }

export interface IFxOptions {
  frequency: number;
}

@Injectable({
  providedIn: 'root'
})
export class ForexApiService {

  readonly allCurrencies = ALL_CURRENCIES;

  listenRatesChangesFor(currency: FxCurrency, options: IFxOptions): Observable<ICurrencyRate[]> {
    const { frequency } = options;
    return interval(frequency).pipe(
      map(() => forexFakeApi.getCurrentRatesFor(currency))
    );
  }

  getCurrentRatesFor(currency: FxCurrency): Observable<ICurrencyRate[]> {
    return of(forexFakeApi.getCurrentRatesFor(currency)).pipe(
      delay(1200)
    );
  }

}

