import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';

interface FullScreenParams<T> {
  origin: HTMLElement;
  content: any;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class FullscreenModalService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>(origin: string) {
    const config: OverlayConfig = new OverlayConfig({
      width: 500,
      height: 300,
      hasBackdrop: true,
      backdropClass: 'className',
    });
  }
}
