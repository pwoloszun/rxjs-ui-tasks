import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, MonoTypeOperatorFunction, Observable } from 'rxjs';
import { delay, map, tap, distinctUntilChanged } from 'rxjs/operators';

const DELAY_IN_MS = 800;

export interface SearchParams {
  [param: string]: string | string[];
}

type DtoId = string | number;

export interface Dto {
  id: DtoId;
}

export type DtoParams<T extends Dto> = Omit<Partial<T>, 'id'>;

@Injectable({
  providedIn: 'root'
})
export class DataApiService<T extends Dto> {

  readonly error$ = new BehaviorSubject<Error | null>(null);

  private isLoadingSub$ = new BehaviorSubject(false);
  readonly isLoading$ = this.isLoadingSub$.pipe(
    distinctUntilChanged()
  );

  constructor(private http: HttpClient) { }

  find(id: DtoId): Observable<T> {
    this.beforeRequest();
    return this.http.get<T>(this.getSingleUrl({ id }))
      .pipe(
        markAsSuccessfull(this.isLoadingSub$)
      );
  }

  search(params: SearchParams): Observable<T[]> {
    this.beforeRequest();
    return this.http.get<T[]>(this.getUrl(), { params })
      .pipe(
        markAsSuccessfull(this.isLoadingSub$)
      );
  }

  update(id: number, changes: DtoParams<T>): Observable<T> {
    this.beforeRequest();
    return this.http.put<T>(this.getSingleUrl({ id }), changes)
      .pipe(
        markAsSuccessfull(this.isLoadingSub$)
      );
  }

  remove(entity: T): Observable<DtoId> {
    const { id } = entity;
    this.beforeRequest();
    return this.http.delete(this.getSingleUrl(entity))
      .pipe(
        map(() => id),
        markAsSuccessfull(this.isLoadingSub$)
      );
  }

  create(params: DtoParams<T>): Observable<T> {
    this.beforeRequest();
    return this.http.post<T>(this.getUrl(), params)
      .pipe(
        markAsSuccessfull(this.isLoadingSub$)
      );
  }

  getAll(): Observable<T[]> {
    this.beforeRequest();
    return this.http.get<T[]>(this.getUrl())
      .pipe(
        markAsSuccessfull(this.isLoadingSub$)
      );
  }

  getUrl(): string {
    throw new Error('Abstract method');
  }

  private beforeRequest() {
    this.error$.next(null);
    this.isLoadingSub$.next(true);
  }

  private getSingleUrl({ id }: Dto): string {
    return `${this.getUrl()}/${id}`;
  }

}

function markAsSuccessfull<T>(
  isLoading$: BehaviorSubject<boolean>
): MonoTypeOperatorFunction<T> {
  return function (input$: Observable<T>): Observable<T> {
    return input$.pipe(
      delay(DELAY_IN_MS),
      tap(() => {
        // error$.next(null);
        isLoading$.next(false);
      }),
    );
  };
}
