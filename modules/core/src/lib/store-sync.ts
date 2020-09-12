import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isDate, isPrimitive, PrimitiveType } from './isFunctions';

/**
 * This store only takes boolean, strings, numbers, and Dates
 */
export class StoreSync<T> {
  private readonly _store: BehaviorSubject<T>;
  private _state$: Readonly<Observable<T>>;

  constructor(initialState: T) {
    Object.values(initialState).forEach((value) => {
      const isValid = isPrimitive(value) || isDate(value);
      if (!isValid) {
        throw new Error(
          'StorSync only takes values: boolean, string, number | date'
        );
      }
    });
    this._store = new BehaviorSubject<T>(initialState);
    this._state$ = this._store.asObservable();
  }

  update(partialState: Readonly<Partial<T>>) {
    const value = this._store.value;
    const newState = { ...value, ...partialState };
    this._store.next(newState);
  }

  get state(): Readonly<T> {
    return { ...this._store.value };
  }

  select$(key: keyof T): Readonly<Observable<T[keyof T]>> {
    return this._state$.pipe(map((s) => s[key]));
  }

  select(key: keyof T): Readonly<T[keyof T]> {
    return this._store.value[key];
  }

  get state$() {
    return this._state$;
  }
}

// class IsOperator<T extends string | number | boolean> {
//   private readonly value: T;
//   constructor(value: T) {
//     this.value = value;
//   }

//   is(val: PrimitiveType | Date): boolean {
//     if (val instanceof Date && this.value instanceof Date) {
//       return this.value.getMilliseconds() === val.getMilliseconds();
//     }
//     return this.value === val;
//   }
// }
