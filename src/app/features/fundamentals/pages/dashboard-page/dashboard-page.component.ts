import { Component, OnInit, OnDestroy } from '@angular/core';

import { PersonService } from '@features/fundamentals/services/person.service';
import { finalize, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  // private completeStreams$ = new Subject<void>();
  person$ = this.personService.getPerson$().pipe(
    // takeUntil(this.completeStreams$),
  );

  personData: any;

  // private subscriptions: Subscription[] = [];
  private subCont = new Subscription();


  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    const sub = this.person$.subscribe({
      next: (data) => {
        this.personData = data;
      },
      complete: () => {

      }
    });

    // this.subscriptions.push(sub);

    this.subCont.add(sub)

  }

  ngOnDestroy(): void {
    // this.completeStreams$.next();

    // this.subscriptions.forEach((s) => s.unsubscribe());
    this.subCont.unsubscribe();
  }

}
