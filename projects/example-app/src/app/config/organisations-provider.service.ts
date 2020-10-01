import { Injectable } from '@angular/core';
import { ContextProvider } from '@ngx-fire-ui/app-shell';

@Injectable({
  providedIn: 'root',
})
export class OrganisationsProviderService extends ContextProvider {
  name: 'organisations';
  constructor() {
    super();
  }
}
