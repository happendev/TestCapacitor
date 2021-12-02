const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');
const { version } = require('../package.json');

const info = {
  date: new Date().toLocaleString(),
};

const file = resolve(__dirname, '..', 'src', 'environments', 'version.ts');
writeFileSync(
  file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT!
/* tslint:disable */
export const VERSION = ${JSON.stringify(info, null, 4)};
/* tslint:enable */
`,
  { encoding: 'utf-8' }
);
