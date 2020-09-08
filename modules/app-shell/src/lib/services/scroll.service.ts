import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';

const isCdkScrollable = (el: any): el is CdkScrollable =>
  el instanceof MatSidenavContent;

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private readonly scrollDebounceTime = 30;
  private readonly scrolledTreshold = 0;
  isOnTop$: Observable<boolean>;
  isScrolled$: Observable<boolean>;
  scrollY$: Observable<number>;

  constructor(private scrollDispatcher: ScrollDispatcher) {
    console.log(this.scrollDispatcher.scrollContainers);
    this.scrollY$ = this.scrollDispatcher
      .scrolled(this.scrollDebounceTime)
      .pipe(
        tap((el) => {
          console.log(el);
        }),
        filter(isCdkScrollable),
        map((el) => el.getElementRef().nativeElement.scrollTop),
        startWith(0)
      );

    this.isOnTop$ = this.scrollY$.pipe(
      map((pos) => pos <= this.scrolledTreshold)
    );
    this.isScrolled$ = this.isOnTop$.pipe(map((isOnTop) => !isOnTop));
  }
}
