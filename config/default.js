/*
 * @Author: dingxizheng
 * @Date:   2017-04-25 23:56:50
 * @Last Modified by:   dingxizheng
 * @Last Modified time: 2017-04-27 23:22:28
 */

'use strict';

var fs = require("fs");
var deferModule = require("config/defer");
var defer = deferModule.deferConfig;

module.exports = {
  port: 3333,
  name: "API",
  version: "0.0.1",
  env: process.env.NODE_ENV || "development",
};