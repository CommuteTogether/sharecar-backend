/*
* @Author: dingxizheng
* @Date:   2017-04-25 23:58:21
* @Last Modified by:   dingxizheng
* @Last Modified time: 2017-04-27 23:40:05
*/

'use strict';
var fs = require("fs");
var deferModule =  require("config/defer");
var defer = deferModule.deferConfig;

module.exports = {
	mongo: {
		url: "mongodb://localhost:27017/carsharedev",
		username: "",
		password: ""
	}
};