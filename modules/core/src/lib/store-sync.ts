import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isDate, isPrimitive, PrimitiveType } from './isFunctions';

/**
 * This store only takes boolean, strings, numbers, and Dates
 */
export class StoreSync<T> {
  state: Readonly<T>;

  constructor(initialState: T) {
    Object.values(initialState).forEach((value) => {
      const isValid = isPrimitive(value) || isDate(value);
      if (!isValid) {
        throw new Error(
          'StorSync only takes values: boolean, string, number | date'
        );
      }
    });
    this.state = { ...initialState };
  }

  setState(partialState: Readonly<Partial<T>>) {
    const newState = { ...this.state, ...partialState };
    this.state = newState;
  }
}
