import { Component, OnInit, OnDestroy } from '@angular/core';

import { PersonService } from '@features/fundamentals/services/person.service';
import { share, Subscription, Observable, shareReplay } from 'rxjs';
import { fullObserver } from '../../../../utils/full-observer';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  person$ = this.personService.getPerson$().pipe(
    // share()
    shareReplay()
  );

  // person$!: Observable<any>;

  // personData!: any;

  // private subscriptionsCon = new Subscription();

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('LATER:',);
    //   this.person$.subscribe(fullObserver('LATER'));
    // }, 4000);

    // this.person$ = this.personService.getPerson$();
    // const sub = this.person$.subscribe((data) => {
    //   this.personData = data;
    // });
    // this.subscriptionsCon.add(sub);
  }

  ngOnDestroy(): void {
    // this.subscriptionsCon.unsubscribe();
  }

}
