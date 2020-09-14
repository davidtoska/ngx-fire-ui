import { Subscription, SubscriptionLike } from 'rxjs';
import { isFunction } from './isFunctions';

// const isFunction = (fn: any) => typeof fn === 'function';

// export interface SubscriptionLike {
//   unsubscribe(): void;
// }

export class SubSink {
  protected _subs: SubscriptionLike[] = [];

  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *   private subs = new SubSink();
   *   ...
   *   this.subs.add(observable$.subscribe(...));
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {}

  /**
   * Add subscriptions to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  add(...subscriptions: SubscriptionLike[]) {
    this._subs = this._subs.concat(subscriptions);
  }

  unsubscribe() {
    this._subs.forEach((sub) => {
      if(isFunction(sub?.unsubscribe)) {
        sub.unsubscribe()
      }
      this._subs = [];
    });
  }
}
