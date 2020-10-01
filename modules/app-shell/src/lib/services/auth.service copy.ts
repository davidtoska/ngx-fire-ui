import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface AuthState {
  uid: string;
  isLoggedIn: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly store = new BehaviorSubject<AuthState>({
    uid: '',
    isLoggedIn: false,
  });
  readonly state$ = this.store.asObservable();
  readonly uid$: Observable<string | null>;
  readonly isLoggedId$: Observable<boolean>;
  constructor() {
    this.uid$ = this.state$.pipe(map((s) => s.uid));
    this.isLoggedId$ = this.state$.pipe(map((s) => s.isLoggedIn));
  }

  logIn() {
    this.store.next({
      uid: 'test-uid',
      isLoggedIn: true,
    });
  }

  logOut() {
    this.store.next({
      uid: '',
      isLoggedIn: false,
    });
  }
}
