/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'zone.happen.testcap',
  appName: 'TestCap',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
    },
  },
  server: {
    url: 'https://testapp.happen.zone',
  },
  ios:{
    limitsNavigationsToAppBoundDomains: true
  }
};

export default config;
