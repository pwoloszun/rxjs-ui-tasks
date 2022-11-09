import { map, Observable, OperatorFunction } from 'rxjs';

type DataProducerFn<T> = (query: string) => Observable<T>;

export function liveSearch<T>(time: number, producer: DataProducerFn<T>): OperatorFunction<string, T> {
  return function (source$) {
    return source$.pipe(
      map(() => 123 as T) // TODO
    );
  };
}
