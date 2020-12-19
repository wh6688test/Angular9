// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
//import * as  SpecReporter from 'jasmine-spec-reporter';
//added by whsu
//const customMatchers = require('protractor-jasmine-matchers');
//import * as customMatchers from 'protractor-jasmine-matchers';

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    //added by whsu
    'async_await.js',
    './src/**/*.e2e-spec.ts'
  ],
  //added by whsu
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    //added by whsu
    //beforeEach(() => jasmine.addMatchers(customMatchers))

    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  //added by whsu
  plugins: [ {
    package: 'protractor-testability-plugin'
  }]

};
