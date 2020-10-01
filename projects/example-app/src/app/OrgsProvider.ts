import { Injectable } from '@angular/core';
import { ContextProvider, ContextCardData } from '@ngx-fire-ui/app-shell';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Organisation {
  orgId: string;
  description: string;
  adress: string;
}
const orgs: Organisation[] = [
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
  {
    orgId: 'Lyngbøtunet Sykehjem',
    adress: '',
    description: 'Aldershjem og sykehjem på laksevåg',
  },
];

@Injectable({ providedIn: 'root' })
export class OrgsProvider extends ContextProvider {
  name = 'hello from orgs-provider.';
  data$ = of(orgs);
  list$: Observable<ContextCardData[]>;

  constructor() {
    super();
    this.list$ = this.data$.pipe(
      map((entityDataList) => {
        const items: ContextCardData[] = entityDataList.map((it) => {
          const item: ContextCardData = {
            headline: it.orgId,
            description: it.description,
            bulletpoints: ['', '', ''],
          };
          return item;
        });
        return [...items];
      })
    );
  }

  create(): void {
    console.log('INITIALIZE A NEW CONTEXT.');
  }
}
