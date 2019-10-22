'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');


let generateEntry = (entries) => {
  return entries.map(e => {
    return new HtmlWebpackPlugin({
      filename: e + '.html',
      template: 'beta.html',
      chunks: [e],
      inject: true
    })
  })
};

const devWebpackConfig = merge(baseWebpackConfig, {
  //开发模式默认配置: https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development',
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },

  devtool: config.dev.devtool,

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: false,
    compress: true,
    host: 'localhost',
    port: 443,
    https: true,
    disableHostCheck: true,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    ...generateEntry(config.build.entries)
  ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = devWebpackConfig.devServer.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port;
      devWebpackConfig.devServer.port = port;

      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: https://${devWebpackConfig.devServer.host}:${port}/home.html`],
        },
        onErrors: utils.createNotifierCallback()
      }));

      resolve(devWebpackConfig)
    }
  })
});
