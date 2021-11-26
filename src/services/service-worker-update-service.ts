import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { App } from '@capacitor/app';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerUpdateService {
  constructor(private updates: SwUpdate, private toast: ToastController) {}

  init() {
    // when service worker registers itself, it will automatically check for updates
    // subscribe to handle what to do when an update is available
    this.updates.versionUpdates.subscribe((event) => {
      void this.presentUpdateToast();
    });

    // if the app becomes active (from background), check if there is an update available
    App.addListener('appStateChange', ({ isActive }) => {
      console.log('App state changed. Is active?', isActive);
      if (isActive) {
        this.updates.checkForUpdate();
      }
    });

    // run timer to check for updates on the service worker every minute
    setInterval(() => {
      this.updates.checkForUpdate();
    }, 60000);
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
}
