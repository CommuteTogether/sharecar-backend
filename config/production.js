/*
* @Author: dingxizheng
* @Date:   2017-04-25 23:57:57
* @Last Modified by:   dingxizheng
* @Last Modified time: 2017-04-26 00:53:19
*/

'use strict';
var fs = require("fs");
var deferModule =  require("config/defer");
var defer = deferModule.deferConfig;

module.exports = {
	mongo: {
		url: "",
		username: "",
		password: ""
	}
};