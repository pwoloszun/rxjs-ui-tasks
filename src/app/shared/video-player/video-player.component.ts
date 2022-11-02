import { Component, OnInit, OnDestroy } from '@angular/core';
import { includes } from 'lodash';
import { throwError, map, Subject, tap, timer, BehaviorSubject, of, EMPTY } from 'rxjs';
import { filter, switchMap, takeWhile, withLatestFrom } from 'rxjs/operators';

import { toTimeStr } from '@utils/datetime-formatter';
import { SubscriptionContainer } from '@utils/subscription-container';

const FREQUENCY = 1000;
const DURATION = 5000;

enum VideStatus {
  Idle = 'Idle',
  Playing = 'Playing',
  Paused = 'Paused',
  Ended = 'Ended',
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html'
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  private status$ = new BehaviorSubject(VideStatus.Idle);
  private timePassed$ = new BehaviorSubject(0);

  canPlay$ = this.status$.pipe(
    map((status) => !includes([VideStatus.Playing, VideStatus.Ended], status))
  );

  canPause$ = this.status$.pipe(
    map((status) => status === VideStatus.Playing)
  );

  canStop$ = this.status$.pipe(
    map((status) => status !== VideStatus.Idle)
  );

  playBtnClick$ = new Subject<void>();
  private playVideo$ = this.playBtnClick$.pipe(
    withLatestFrom(this.canPlay$),
    filter(([_, canPlay]) => canPlay),
    tap(() => this.status$.next(VideStatus.Playing))
  );

  pauseBtnClick$ = new Subject<void>();
  private pauseVideo$ = this.pauseBtnClick$.pipe(
    withLatestFrom(this.canPause$),
    filter(([_, canPause]) => canPause),
    tap(() => this.status$.next(VideStatus.Paused))
  );

  stopBtnClick$ = new Subject<void>();
  private stopVideo$ = this.stopBtnClick$.pipe(
    withLatestFrom(this.canStop$),
    filter(([_, canStop]) => canStop),
    tap(() => {
      this.status$.next(VideStatus.Idle);
      this.timePassed$.next(0);
    })
  );

  private innerTimer$ = timer(0, FREQUENCY).pipe(
    withLatestFrom(this.timePassed$),
    takeWhile(([_, timePassed]) => {
      return timePassed < DURATION;
    }),
    tap(([_, currTimePassed]) => {
      const nextTimePassed = currTimePassed + FREQUENCY;
      this.timePassed$.next(nextTimePassed);
    }),
    map(([_, ms]) => {
      const leftMs = DURATION - ms;
      return toTimeStr(leftMs, true);
    }),
    tap({
      complete: () => {
        this.status$.next(VideStatus.Ended);
      }
    })
  );

  video$ = this.status$.pipe(
    switchMap((status) => {
      if (status === VideStatus.Playing) {
        return this.innerTimer$;
      } else if (status === VideStatus.Paused) {
        return EMPTY;
      } else if (status === VideStatus.Idle) {
        return of(toTimeStr(DURATION, true));
      } else if (status === VideStatus.Ended) {
        return of(toTimeStr(0, true));
      } else {
        return throwError(() => `Unknown Video Status: ${status}`);
      }
    })
  );

  statusInfo$ = this.status$.pipe(
    map((status) => {
      if (status === VideStatus.Playing) {
        return 'Playing...';
      } else if (status === VideStatus.Paused) {
        return 'Paused';
      } else if (status === VideStatus.Idle) {
        return 'Stopped';
      } else if (status === VideStatus.Ended) {
        return 'Time is up! Video ended';
      } else {
        return throwError(() => `Unknown Video Status: ${status}`);
      }
    })
  );

  private subCont = new SubscriptionContainer();

  constructor() { }

  ngOnInit(): void {
    this.subCont.subscribeToAll([
      this.playVideo$,
      this.pauseVideo$,
      this.stopVideo$
    ]);
  }

  ngOnDestroy(): void {
    this.subCont.dispose();
  }

}
