import { debounceTime, distinctUntilChanged, filter, map, Observable, OperatorFunction, switchMap } from 'rxjs';

type DataProducerFn<T> = (query: string) => Observable<T>;

const MIN_SEARCH_QUERY_LENGTH = 3;

export function liveSearch<T>(time: number, producer: DataProducerFn<T>): OperatorFunction<string, T> {
  return function (source$) {
    return source$.pipe(
      debounceTime(time),
      filter((query) => query.length >= MIN_SEARCH_QUERY_LENGTH),
      distinctUntilChanged(),
      switchMap(producer)
    );
  };
}
