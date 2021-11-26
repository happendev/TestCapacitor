import { Injectable } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PopupHelper {
  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  loader: HTMLIonLoadingElement;

  async showLoading(message: string) {
    this.loader = await this.loadingCtrl.create({
      message,
      translucent: false,
    });

    await this.loader.present();
  }

  async dismissLoading() {
    if (this.loader) {
      // eslint-disable-next-line no-console
      console.log('dismissing loader');
      await this.loader.dismiss();
    } else {
      // eslint-disable-next-line no-console
      console.log('popup-helper: dismissLoading called with no loader!');
    }
  }

  async showAlert(title: string, subTitle: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      buttons: ['OK'],
      translucent: false,
    });

    await alert.present();
    await alert.onDidDismiss();
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 4500,
      translucent: false,
    });
    await toast.present();
  }

  async showAlertWithCallback(
    title: string,
    subTitle: string,
    callback: () => void
  ) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            callback();
          },
        },
      ],
    });
    await alert.present();
  }

  async showConfirm(
    title: string,
    subTitle: string,
    buttonConfirm: string,
    callbackConfirm: () => void,
    buttonCancel: string,
    callbackCancel: () => void
  ) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      buttons: [
        {
          text: buttonConfirm,
          handler: () => {
            if (callbackConfirm) {
              callbackConfirm();
            }
          },
        },
        {
          text: buttonCancel,
          role: 'cancel',
          handler: () => {
            if (callbackCancel) {
              callbackCancel();
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async showSimpleConfirm(title: string, subTitle: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        header: title,
        subHeader: subTitle,
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              resolve(true);
            },
          },
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              resolve(false);
            },
          },
        ],
      });
      await alert.present();
    });
  }
}
