import { isPrimitive } from './isFunctions';

/**
 * This store only takes boolean, strings, numbers
 */
export class StoreSync<T = any> {
  state: Readonly<T>;

  constructor(initialState: T) {
    Object.values(initialState).forEach((value) => {
      if (!isPrimitive(value)) {
        throw new Error(
          'StorSync only takes values: boolean, string, or number'
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
