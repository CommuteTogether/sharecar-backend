/*
* @Author: dingxizheng
* @Date:   2017-04-23 21:25:47
* @Last Modified by:   dingxizheng
* @Last Modified time: 2017-04-26 00:53:51
*/

'use strict';

var config = require("config");
var dbConfig = config.get("mongo");

console.log(dbConfig);