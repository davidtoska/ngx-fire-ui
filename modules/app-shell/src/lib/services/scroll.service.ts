import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';

const isMatSidenavContent = (el: any): el is MatSidenavContent =>
  el instanceof MatSidenavContent;

export class ScrollState {
  y = 0;
  isScrolled = false;

  public static default(): ScrollState {
    return { y: 0, isScrolled: false };
  }
}

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private readonly scrollDebounceTime = 30;
  private readonly scrolledTreshold = 0;
  state$: Observable<ScrollState>;
  state: ScrollState = ScrollState.default();

  constructor(private scrollDispatcher: ScrollDispatcher) {
    this.state$ = this.scrollDispatcher.scrolled(this.scrollDebounceTime).pipe(
      filter(isMatSidenavContent),
      map((element) => element.getElementRef().nativeElement.scrollTop),
      map((y) => ({ y, isScrolled: y > this.scrolledTreshold })),
      startWith({ y: 0, isScrolled: false })
    );

    this.state$.subscribe((change) => {
      this.state = { ...change };
    });
  }
}
