/// <reference types="@capacitor/local-notifications" />
/// <reference types="@capacitor/push-notifications" />
/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'zone.happen.testcap',
  appName: 'TestCap',
  webDir: 'www',
  plugins: {},
  server: {
    url: 'https://testapp.happen.zone',
  },
};

export default config;
