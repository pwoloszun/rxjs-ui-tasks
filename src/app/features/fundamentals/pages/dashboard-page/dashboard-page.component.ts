import { Component, OnInit, OnDestroy } from '@angular/core';

import { PersonService } from '@features/fundamentals/services/person.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  person$ = this.personService.getPerson$();

  constructor(private personService: PersonService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

}
