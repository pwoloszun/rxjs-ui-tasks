import { Observable, PartialObserver, Subscription } from 'rxjs';

type NextType<T> = (value: T) => void;
type ErrorType = (error: any) => void;
type CompleteType = () => void;

export class SubscriptionContainer {

  private subscriptions: Subscription[] = [];

  set add(sub: Subscription) {
    this.subscriptions.push(sub);
  }

  subscribeTo<T>(
    stream$: Observable<T>,
    next?: NextType<T>,
    error?: ErrorType,
    complete?: CompleteType
  ): void {
    const sub = stream$.subscribe({ next, error, complete });
    this.subscriptions.push(sub);
  }

  subscribeWith<T>(stream$: Observable<T>, obs?: PartialObserver<T>) {
    const sub = stream$.subscribe(obs);
    this.subscriptions.push(sub);
  }

  dispose(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  subscribeToAll(
    streamsArr$: Observable<any>[],
    next?: NextType<any>,
    error?: ErrorType,
    complete?: CompleteType
  ): void {
    streamsArr$.forEach((stream$) => {
      this.subscribeTo(stream$, next, error, complete);
    });
  }

}
