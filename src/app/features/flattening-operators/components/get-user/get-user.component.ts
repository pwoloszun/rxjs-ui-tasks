import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorModalComponent } from '@shared/error-modal';
import { FakeApiService } from '@api/fake-api.service';
import { fullObserver } from '@utils/full-observer';
import { SubscriptionContainer } from '@utils/subscription-container';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
})
export class GetUserComponent implements OnInit, OnDestroy {

  private subCont = new SubscriptionContainer();

  // TODO
  private downloadUser$ = this.fakeApiService
    .failedRequest$('/user/100', `Cant't find User ID=100`);

  // TODO
  private logError$ = this.fakeApiService
    .successfulRequest$('/log/error', { error: new Error(`some err desc`) });

  constructor(
    private fakeApiService: FakeApiService,
    private matSnackBar: MatSnackBar
  ) { }

  // TODO
  testTmp() {
    this.openErrorSnackBar('My happy msg!', 5_000);
  }

  ngOnInit(): void { }

  ngOnDestroy() { }

  private openErrorSnackBar(message: string, duration: number) {
    this.matSnackBar.openFromComponent(ErrorModalComponent, {
      data: { message, duration },
      duration,
    });
  }

}
