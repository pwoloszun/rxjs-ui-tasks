import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, Observable, Subject, merge, tap } from 'rxjs';

@Component({
  selector: 'app-observable-ui-events-page',
  templateUrl: './observable-ui-events-page.component.html',
})
export class ObservableUiEventsPageComponent implements OnInit, AfterViewInit {

  @ViewChild('vChildTestBtn')
  private vChildBtnRef!: ElementRef<HTMLElement>;
  private vChildBtnClick$!: Observable<Event>;
  private vChildResult$!: Observable<string>;

  subBtnClick$ = new Subject<MouseEvent>();
  private subBtnResult$ = this.subBtnClick$.pipe(
    tap((event) => console.log('subBtn', event)),
    map(() => `Subject btn click!`)
  );

  // ANY button click result combined $
  anyBtnResult$!: Observable<string>;

  subjectTestHandler(event: MouseEvent) {
    this.subBtnClick$.next(event);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initViewChildBtn();

    this.anyBtnResult$ = merge(
      this.subBtnResult$,
      this.vChildResult$
    );
  }

  private initViewChildBtn() {
    this.vChildBtnClick$ = fromEvent(this.vChildBtnRef.nativeElement, 'click');
    this.vChildResult$ = this.vChildBtnClick$.pipe(
      tap((event) => console.log('vChildBtn', event)),
      map(() => `ViewChild btn click!`)
    );
  }

}
