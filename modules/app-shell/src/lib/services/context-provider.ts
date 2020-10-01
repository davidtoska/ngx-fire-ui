import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export const CONTEXT_PROVIDER = new InjectionToken(
  '__NGX_FIRE_UI_CONTEXT_PROVIDER'
);

export interface ContextCardData {
  headline: string;
  description: string;
  bulletpoints: [string, string, string];
}
export abstract class ContextProvider {
  abstract name: string;
  abstract list$: Observable<ContextCardData[]>;
  abstract create(): void;
}
