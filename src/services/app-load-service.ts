import { Injectable } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { DeviceInfo } from 'src/utils/device-info';
import { ServiceWorkerUpdateService } from './service-worker-update-service';

@Injectable({
  providedIn: 'root',
})
export class AppLoadService {
  constructor(
    private updateService: ServiceWorkerUpdateService,
    private device: DeviceInfo,
    private platform: Platform
  ) {}

  async initApp(): Promise<any> {
    await this.platform.ready();

    // setup storage

    // await this.setupWeb();
    // await this.setupNative();
  }

  private async setupWeb() {
    if (!this.device.isNative) {
      this.updateService.init();
    }
  }

  private async setupNative() {
    if (this.device.isNative) {
      setTimeout(() => {
        this.updateService.init();

        // hide the splash when we are finished loading
        SplashScreen.hide();
      }, 5000);
    }
  }
}
