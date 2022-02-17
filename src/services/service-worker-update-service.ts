import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { App } from '@capacitor/app';
import { ToastController } from '@ionic/angular';
import { DeviceInfo } from 'src/utils/device-info';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerUpdateService {
  constructor(
    private updates: SwUpdate,
    private toast: ToastController,
    private device: DeviceInfo
  ) {}

  init() {
    // when service worker registers itself, it will automatically check for updates
    // subscribe to handle what to do when an update is available
    this.updates.versionUpdates.subscribe((event) => {
      if (event.type === 'VERSION_READY') {
        void this.presentUpdateToast();
      }
    });

    // if the app becomes active (from background), check if there is an update available
    if (this.device.isNative) {
      App.addListener('appStateChange', ({ isActive }) => {
        console.log('App state changed. Is active?', isActive);
        if (isActive) {
          this.updates.checkForUpdate();
        }
      });
    }

    // run timer to check for updates on the service worker every minute
    setInterval(() => {
      if (this.updates.isEnabled) {
        this.updates.checkForUpdate();
      }
    }, 30000);
  }

  private async presentUpdateToast() {
    const toast = await this.toast.create({
      message: 'This app has been updated and needs to restart.',
      mode: 'md',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
    await toast.onDidDismiss();

    window.location.reload(); // on toast dismiss, restart app's webview with new version
  }

  public get isEnabled() {
    return this.updates.isEnabled;
  }
}
