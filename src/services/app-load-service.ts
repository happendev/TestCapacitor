import { Injectable } from '@angular/core';
import { ServiceWorkerUpdateService } from './service-worker-update-service';

@Injectable({
  providedIn: 'root',
})
export class AppLoadService {
  constructor(private updateService: ServiceWorkerUpdateService) {}

  async initApp(): Promise<any> {
    this.updateService.init();
  }
}
