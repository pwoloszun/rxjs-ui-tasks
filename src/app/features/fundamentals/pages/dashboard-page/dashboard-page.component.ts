import { Component, OnInit, OnDestroy } from '@angular/core';

import { PersonService } from '@features/fundamentals/services/person.service';
import { interval, share, shareReplay, startWith, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  private detroy$ = new Subject<void>();

  person$ = this.personService.getPerson$().pipe(
    startWith({ name: '', age: null }),
    // share()
    // takeUntil(this.detroy$),
    shareReplay({ refCount: true })
  );


  // hotInter$ = interval(500).pipe(
  //   shareReplay({ refCount: true })
  // );

  // IMPERATIVE subscription
  // personData: any;

  // private subscriptions: Subscription[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    //   // IMPERATIVE subscription
    //   const sub = this.person$.subscribe((value) => {
    //     this.personData = value;
    //   });
    //   this.subscriptions.push(sub);

    // setTimeout(() => {
    //   console.log('3rd SUBSCRIBER:',);
    //   this.person$.subscribe((value) => {
    //     console.log('qq:', value);
    //   });
    // }, 2500);
  }

  // IMPERATIVE subscription
  ngOnDestroy(): void {
    console.log('DESTR:',);

    this.detroy$.next();
    // this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
