import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class AppLocation {
  constructor() {}

  public lastKnownLatitude = 0;
  public lastKnownLongitude = 0;

  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);

    this.lastKnownLatitude = coordinates.coords.latitude;
    this.lastKnownLongitude = coordinates.coords.longitude;
  }
}
