import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { DeviceInfo } from 'src/utils/device-info';

@Component({
  selector: 'app-init',
  templateUrl: 'init.page.html',
  styleUrls: ['init.page.scss'],
})
export class InitPage implements OnInit {
  constructor(private device: DeviceInfo, private router: Router) {}

  ngOnInit() {
    if (this.device.isNative) {
      // open a browser to the PWA
      Browser.open({ url: 'https://testapp.happen.zone/' });
    } else {
      this.router.navigate(['/home'], {
        replaceUrl: true, // dont let user come back to init page
      });
    }
  }
}
