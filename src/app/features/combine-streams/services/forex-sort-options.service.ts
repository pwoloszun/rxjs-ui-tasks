import { Injectable } from '@angular/core';

export interface IForexSortByOption {
  value: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForexSortOptionsService {

  private sortByOptions = [
    { value: 'isoCode', text: 'Code' },
    { value: 'rateValue', text: 'Current Rate' },
    { value: 'updatedAt', text: 'Last Update' },
  ];

  private orderOptions = [
    { value: 'asc', text: 'Ascending' },
    { value: 'desc', text: 'Descending' },
  ];

  public readonly initialSortBy = this.sortByOptions[0].value;

  public readonly initialOrder = this.orderOptions[0].value;

  getSortByOptions(): IForexSortByOption[] {
    return this.sortByOptions;
  }

  getOrderOptions(): IForexSortByOption[] {
    return this.orderOptions;
  }

  getLabels(): string[] {
    return this.sortByOptions.map((op) => op.text);
  }
}
