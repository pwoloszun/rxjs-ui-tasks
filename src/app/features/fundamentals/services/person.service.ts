import { Injectable } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPerson$() {
    return of({ name: 'bob', age: 123 }).pipe(
      tap(() => console.log('REQUEST fetch person')),
      delay(4000),
      tap(() => console.log('RESPONSE fetch person')),
    );
  }

}
