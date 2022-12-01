import { Component, OnInit, OnDestroy } from '@angular/core';

import { PersonService } from '@features/fundamentals/services/person.service';
import { finalize, interval, map, share, shareReplay, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  person$ = this.personService.getPerson$().pipe(
    // share()
    shareReplay()
  );

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
