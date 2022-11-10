import { map, Observable, OperatorFunction, debounceTime, filter, distinctUntilChanged, switchMap } from 'rxjs';

const MIN_SEARCH_QUERY_LENGTH = 3;

type DataProducerFn<T> = (query: string) => Observable<T>;

export function liveSearch<T>(time: number, producer: DataProducerFn<T>): OperatorFunction<string, T> {
  return function (source$) {
    return source$.pipe(
      debounceTime(time),
      filter((q) => q.length >= MIN_SEARCH_QUERY_LENGTH),
      distinctUntilChanged(),
      switchMap(producer)
    );
  };
}
