import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfo {
  constructor() {
    console.log('Platforms: ' + this.platform);
  }
  public get platform(): string {
    return Capacitor.getPlatform();
  }

  public get isAndroid(): boolean {
    return this.platform === 'android';
  }

  public get isIos(): boolean {
    return this.platform === 'ios';
  }

  public get isNative(): boolean {
    return Capacitor.isNativePlatform();
  }
}
