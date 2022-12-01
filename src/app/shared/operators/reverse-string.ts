import { map, MonoTypeOperatorFunction, Observable, OperatorFunction } from 'rxjs';

export function reverseString(a:number): MonoTypeOperatorFunction<string> {

  return function (source$) {
    return source$.pipe(
      map((str) => str.split('').reverse().join(''))
    );
  };

}


export function reverseString_LONG<T, K>(): OperatorFunction<string, string> {
  return function (input$) {
    return input$.pipe(
      map((str) => str.split('').reverse().join(''))
    );
  };
}
