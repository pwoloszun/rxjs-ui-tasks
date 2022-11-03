import { Component, OnInit, OnDestroy } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  title = 'Dashboard';

  person$ = this.getPerson$();

  constructor() { }

  ngOnInit(): void {
    // TODO
    // setTimeout(() => {
    //   console.log('Later subscription');
    // }, 4000);
  }

  getPerson$() {
    return of({ name: 'bob', age: 123 }).pipe(
      tap(() => console.log('REQUEST fetch person')),
      delay(2000),
      tap(() => console.log('RESPONSE fetch person')),
    );
  }

  ngOnDestroy(): void {
    // cleanup
  }

}
