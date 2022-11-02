import { faker } from '@faker-js/faker';
import { keys, map, random, reduce, values } from 'lodash';

export enum FxCurrency {
  Usd = 'USD',
  Eur = 'EUR',
  Gbp = 'GBP',
  Cny = 'CNY',
  Pln = 'PLN',
}

export const ALL_CURRENCIES = values(FxCurrency);

export interface ICurrencyRate {
  id: number;
  isoCode: string;
  rateValue: number;
  updatedAt: number;
}

export const forexFakeApi = {

  getCurrentRatesFor(currency: FxCurrency): ICurrencyRate[] {
    return map(ALL_CURRENCIES, (currency, index) => {
      return generateRate(currency, index);
    });
  }

};

function generateRate(currency: FxCurrency, i: number): ICurrencyRate {
  const id = 10 * (i + 1);
  const isoCode = currency;
  const rateValue = random(0.5, 9.5, true);
  const updatedAt = new Date(faker.date.past()).getTime();
  return {
    id,
    isoCode,
    rateValue,
    updatedAt,
  };
}
