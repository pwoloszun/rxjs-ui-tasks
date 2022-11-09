import { from, map, OperatorFunction } from 'rxjs';

interface IWithLength {
  length: number;
}

export function mapToLength(): OperatorFunction<IWithLength, number> {
  return function (input$) {
    return input$.pipe(
      map((withLength) => withLength.length)
    );
  };
}

from(['a', 'b']).pipe(
  mapToLength()
).subscribe()
