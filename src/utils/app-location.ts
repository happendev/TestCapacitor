import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { PopupHelper } from './popup-helper';

@Injectable({
  providedIn: 'root',
})
export class AppLocation {
  constructor(private popup: PopupHelper) {}

  public lastKnownLatitude = 0;
  public lastKnownLongitude = 0;

  async locate() {
    this.popup.showToast('Locating with plugin');
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);

    this.lastKnownLatitude = coordinates.coords.latitude;
    this.lastKnownLongitude = coordinates.coords.longitude;
  }
}
