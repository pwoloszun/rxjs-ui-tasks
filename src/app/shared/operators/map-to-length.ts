import { from, map, OperatorFunction } from 'rxjs';

import { fullObserver } from '@utils/full-observer';

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

function exampleUsage() {
  from(['aa', 'bbbbb', '', 'ddd']).pipe(
    mapToLength()
  ).subscribe(fullObserver(`mapToLength exampleUsage`));
}

// exampleUsage();
