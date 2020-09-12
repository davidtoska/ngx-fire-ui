import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSync } from '@ngx-fire-ui/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private state$ = new StoreSync({
    uid: '',
    isLoggedin: false,
  });
  readonly uid$: Observable<string | null>;
  readonly isLoggedId$: Observable<boolean>;
  constructor() {
    this.uid$ = this.state$.state$.pipe(map((s) => s.uid));
    this.isLoggedId$ = this.state$.state$.pipe(map((s) => s.isLoggedin));
  }

  logIn() {
    this.state$.update({
      uid: 'test-uid',
      isLoggedin: true,
    });
  }

  logOut() {
    this.state$.update({
      uid: '',
      isLoggedin: false,
    });
  }
}
