import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
 providedIn: 'root',
})
export class ServiceWorker {
 private registration: ServiceWorkerRegistration | null = null;

 public async register() {
    if ('serviceWorker' in navigator) {
      try {
        this.registration = await navigator.serviceWorker.register(
          `${environment.baseHref}service-worker.js`,
          { scope: `${environment.baseHref}` }
        );
      } catch (error) {
        console.error('Service worker registration failed:', error);
      }
    }
 }

 public async unregister() {
    if (this.registration) {
      try {
        await this.registration.unregister();
        this.registration = null;
      } catch (error) {
        console.error('Service worker unregistration failed:', error);
      }
    }
 }
}