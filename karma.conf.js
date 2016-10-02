// Karma configuration
module.exports = function (config) {
  config.set({

    basePath: '.',

    // Available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'commonjs',
      'jasmine'
    ],

    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],

    exclude: [],

    preprocessors: {
      'src/**/*.js': ['babel', 'coverage', 'commonjs'],
      'test/**/*.js': ['babel', 'commonjs']
    },

    reporters: ['coverage', 'progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },

    commonjsPreprocessor: {
      modulesRoot: '.'
    },

    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'coverage/'},
        {type: 'text'}
      ],
    }
  })
};
