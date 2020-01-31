// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/hockey-score'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    files: [

      { pattern: 'node_modules/@material/*/dist/*', included: false, watched: false },
      // Include all Angular dependencies
      { pattern: 'node_modules/@angular/**/*', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*', included: false, watched: false },

      // Include a Material theme in the test suite. Also include the MDC theme as
      // karma runs tests for the MDC prototype components as well.
      {
        pattern: '~@angular/material/prebuilt-themes/indigo-pink.css',
        included: true,
        watched: true
      }]
  });
};
