import { map, Observable, OperatorFunction } from 'rxjs';

type DataProducerFn<T> = (query: string) => Observable<T>;

const DEFAULT_MIN_LENGTH = 2;

export function liveSearch<T>(
  time: number,
  producer: DataProducerFn<T>,
  minLength = DEFAULT_MIN_LENGTH
): OperatorFunction<string, T> {
  return function (source$) {
    return source$.pipe(
      map(() => 123 as T) // TODO
    );
  };
}
