/*
* @Author: dingxizheng
* @Date:   2017-04-27 23:55:27
* @Last Modified by:   dingxizheng
* @Last Modified time: 2017-04-28 00:01:56
*/

'use strict';

const mongoose  = require("mongoose");
const Schema = mongoose.Schema; 

const mongooseApiQuery = require("mongoose-api-query");
const createdModified = require("mongoose-createdmodified").createdModifiedPlugin;

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true }
});

userSchema.plugin(mongooseApiQuery);
userSchema.plugin(createdModified, { index: true });

var User = mongoose.model('User', userSchema);

module.exports = User;