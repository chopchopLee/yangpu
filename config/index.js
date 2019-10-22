'use strict';

const path = require('path');

let config = {
  dev: {
    // Paths
    assetsSubDirectory: 'statics',
    assetsPublicPath: '/',
    proxyTable: {},
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    entries: ['home','detail'],
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/shop/'),
    assetsSubDirectory: 'statics',
    assetsPublicPath: './',

    /**
     * Source Maps
     */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    bundleAnalyzerReport: false
  }
};

config.build.entries.forEach(e => {
  config.build[e] = path.resolve(__dirname, `../dist/shop/${e}.html`);
});

module.exports = config;
