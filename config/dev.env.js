'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"//sports-qa.lifesense.com"',
  WX_OPEN_URL: '"http://sports-qa.lifesense.com/wechatgateway_service/third/wechatAuthorize"',
  WX_APPID_5: '"wx31cf436485b2fdf8"',
  SEND_SECRET: '"ZnJpZW5kOmNvZGUgICAgICAgICAgICAgICAgICAgICA="'
});
