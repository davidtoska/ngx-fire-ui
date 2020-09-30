import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type StateRecord<State, Names extends string = string> = Readonly<
  Record<Names, State>
>;

export class SubjectStore<State extends object> {
  private readonly store: BehaviorSubject<State>;
  private readonly initialState: State;
  readonly state$: Observable<State>;
  private readonly namedStates: StateRecord<State>;

  constructor(initialState: State, namedStates: StateRecord<State> = {}) {
    this.initialState = { ...initialState };
    this.store = new BehaviorSubject<State>(initialState);
    this.state$ = this.store.asObservable();
    this.namedStates = { ...namedStates };
  }

  update(partialState: Partial<State>): void {
    const clone = { ...this.state };
    this.store.next({ ...clone, ...partialState });
  }

  select(key: keyof State): Observable<State[keyof State]> {
    return this.state$.pipe(map((s) => s[key]));
  }

  get state() {
    return this.store.value;
  }

  resetStore() {
    const initialClone = { ...this.initialState };
    this.store.next(initialClone);
  }

  sliceSync(key: keyof State): State[keyof State] {
    return this.state[key];
  }

  setNamedState(name: string) {
    const state = this.namedStates[name];
    if (state) {
      this.store.next({ ...state });
    } else {
      console.warn('State with name ' + name + 'not found');
    }
  }
}
