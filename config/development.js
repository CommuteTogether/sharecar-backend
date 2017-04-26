/*
* @Author: dingxizheng
* @Date:   2017-04-25 23:58:21
* @Last Modified by:   dingxizheng
* @Last Modified time: 2017-04-26 01:28:30
*/

'use strict';
var fs = require("fs");
var deferModule =  require("config/defer");
var defer = deferModule.deferConfig;

module.exports = {
	mongo: {
		url: "mongodb://localhost/myappdatabase",
		username: "",
		password: ""
	}
};