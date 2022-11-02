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

  // TODO
  // check if can play
  // start play or do nothing
  private playVideo$ = this.playBtnClick$.pipe(
  );

  pauseBtnClick$ = new Subject<void>();
  // TODO
  // check if can pause
  // start pause or do nothing
  private pauseVideo$ = this.pauseBtnClick$.pipe(
  );

  stopBtnClick$ = new Subject<void>();
  // TODO
  // check if can stop
  // stop or do nothing
  private stopVideo$ = this.stopBtnClick$.pipe(
  );

  // TODO
  // run until timePassed < DURATION
  // update time passed
  // render video time left
  // handle: Video Ended event
  private innerTimer$ = timer(0, FREQUENCY).pipe(
  );

  // TODO
  // render Video time left
  video$ = this.status$.pipe(
    switchMap((status) => {
      if (status === VideStatus.Playing) {
        return EMPTY;
      } else if (status === VideStatus.Paused) {
        return EMPTY;
      } else if (status === VideStatus.Idle) {
        return EMPTY;
      } else if (status === VideStatus.Ended) {
        return EMPTY;
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
      // TODO
    ]);
  }

  ngOnDestroy(): void {
    this.subCont.dispose();
  }

}
