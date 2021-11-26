import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { SplashScreen } from '@capacitor/splash-screen';
import { ServiceWorkerUpdateService } from 'src/services/service-worker-update-service';
import { AppLocation } from 'src/utils/app-location';
import { DeviceInfo } from 'src/utils/device-info';
import { PopupHelper } from 'src/utils/popup-helper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  location: string;

  photoPath: string;

  constructor(
    public device: DeviceInfo,
    private popup: PopupHelper,
    public gps: AppLocation,
    private updateService: ServiceWorkerUpdateService
  ) {}

  ngOnInit() {
    this.updateService.init();
    // // hide the splash when we are finished loading
    SplashScreen.hide();
  }

  locate() {
    this.gps.locate();
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.photoPath = image.webPath;
  }
}
