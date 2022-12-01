import { debounceTime, distinctUntilChanged, filter, map, Observable, OperatorFunction, switchMap } from 'rxjs';

type DataProducerFn<T> = (query: string) => Observable<T>;

const DEFAULT_MIN_LENGTH = 2;

export function liveSearch<T>(
  time: number,
  producer: DataProducerFn<T>,
  minLength = DEFAULT_MIN_LENGTH
): OperatorFunction<string, T> {

  return function (source$) {
    return source$.pipe(
      debounceTime(time),
      filter((query) => query.length >= minLength),
      distinctUntilChanged(),
      switchMap(producer)
    );
  };

}
