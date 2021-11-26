import { Component } from '@angular/core';
import { AppLocation } from 'src/utils/app-location';
import { DeviceInfo } from 'src/utils/device-info';
import { PopupHelper } from 'src/utils/popup-helper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  platform: string;
  location: string;

  constructor(
    private device: DeviceInfo,
    private popup: PopupHelper,
    public gps: AppLocation
  ) {
    this.platform = this.device.platform;
  }

  locate() {
    this.gps.locate();
  }
}
