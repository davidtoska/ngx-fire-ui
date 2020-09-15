import { isPrimitive, PrimitiveType } from './isFunctions';

/**
 * This store only takes boolean, strings, numbers
 */
export class StoreSync<T extends Record<string, PrimitiveType>> {
  state: Readonly<T>;

  constructor(initialState: T) {
    Object.values(initialState).forEach((value) => {
      if (isPrimitive(value)) {
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
