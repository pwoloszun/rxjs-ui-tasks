import { map, MonoTypeOperatorFunction, Observable, OperatorFunction } from 'rxjs';

export function reverseString(): MonoTypeOperatorFunction<string> {
  return function (input$) {
    return input$.pipe(
      map((str) => str.split('').reverse().join(''))
    );
  };
}


export function reverseString_LONG(): OperatorFunction<string, string> {
  return function (input$) {
    return input$.pipe(
      map((str) => str.split('').reverse().join(''))
    );
  };
}
