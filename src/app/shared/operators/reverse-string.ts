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


// interval(1000).pipe(
//   // reverseString_LONG(),
//   myMap((n: number) => n ** 2)
// );


// my map example
function myMap(mappingFn: Function): OperatorFunction<any, any> {
  return function (source$) {
    return new Observable((obs) => {
      source$.subscribe({
        next(value) {
          const mapped = mappingFn(value);
          obs.next(mapped);
        }
      });
    });
  };
}


