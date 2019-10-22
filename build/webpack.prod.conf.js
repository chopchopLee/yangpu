'use strict';

const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin');

let str = process.argv.splice(-1);
const env = (str[0] === 'qa') ? require('../config/dev.env') :require('../config/prod.env');

let generateEntry = (entries) => {
  return entries.map(e => {
    return new HtmlWebpackPlugin({
      filename: config.build[e],
      template: str[0] === 'qa' ? 'beta.html' :'online.html',
      inject: true,
      chunks: [e],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true
      }
    })
  })
};

const webpackConfig = merge(baseWebpackConfig, {
  //生产模式默认配置: https://webpack.js.org/concepts/mode/#mode-production
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: false,
      usePostCSS: true
    })
  },
  devtool: false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:7].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash:12].css')
    }),
    ...generateEntry(config.build.entries),
    new webpack.HashedModuleIdsPlugin(),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.style\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    //Webpack4生产模式默认支持js的自动压缩
    //Webpack4使用SplitChunkPlugins代替老的CommonChunkPlugin实现代码分离
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    },
    //为每个entry提取出Webpack Runtime模块
    runtimeChunk: {
      name: 'manifest'
    },
  }
  
});

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;
