import { delay, Observable, of } from 'rxjs';

const servicePrivState = {
  items: [
    '1st search result',
    '2nd search result',
    '3rd search result',
  ],
};

export const searchApiServiceStub = {
  setQueryResponse(items: string[]) {
    servicePrivState.items = items;
  },

  querySearch$(query: string): Observable<string[]> {
    return of(servicePrivState.items).pipe(
      delay(400)
    );
  },
};
