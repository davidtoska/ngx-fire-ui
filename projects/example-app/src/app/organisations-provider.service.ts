import { Injectable } from '@angular/core';
// import {  } from "@ngx-fire-ui/app-";
import { ContextProvider } from '@ngx-fire-ui/app-shell';

@Injectable({
  providedIn: 'root',
})
export class OrganisationsProviderService extends ContextProvider {
  name: '';
  constructor() {
    super();
  }
}
