import { Component, OnInit, OnDestroy } from '@angular/core';

import { PersonService } from '@features/fundamentals/services/person.service';
import { share, shareReplay } from 'rxjs';
import { SubscriptionContainer } from '../../../../utils/subscription-container';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  title = 'Dashboard';

  person$ = this.personService.getPerson$().pipe(
    shareReplay()
  );

  private subCont = new SubscriptionContainer();

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    // this.subCont.add = this.person$.subscribe((data) => {
    //   this.p = data;
    // });

    // TODO
    setTimeout(() => {
      console.log('Later subscription');
      this.subCont.add = this.person$
        .subscribe((d) => console.log('qq:', d));
    }, 4000);
  }

  ngOnDestroy(): void {
    // cleanup
    this.subCont.dispose();
  }

}
