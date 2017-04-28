/*
 * @Author: dingxizheng
 * @Date:   2017-04-23 21:25:47
 * @Last Modified by:   dingxizheng
 * @Last Modified time: 2017-04-27 23:47:46
 */

'use strict';

/**
 * Module Dependencies
 */
const config = require("config"),
  restify = require('restify'),
  bunyan = require('bunyan'),
  winston = require('winston'),
  bunyanWinston = require('bunyan-winston-adapter'),
  mongoose = require('mongoose');

const dbConfig = config.get("mongo");

/**
 * Logging
 */
global.log = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: "info",
      timestamp: () => {
        return new Date().toString()
      },
      json: true
    }),
  ]
});

/**
 * Initialize Server
 */
global.server = restify.createServer({
  name: config.get("name"),
  version: config.get("version"),
  log: bunyanWinston.createAdapter(log),
});

/**
 * Middleware
 */
server.use(restify.jsonBodyParser({
  mapParams: true
}));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({
  mapParams: true
}));
server.use(restify.fullResponse());

/**
 * Error Handling
 */
server.on('uncaughtException', (req, res, route, err) => {
  log.error(err.stack)
  res.send(err)
});


/**
 * Lift Server, Connect to DB & Bind Routes
 */
server.listen(config.get("port"), function() {

  mongoose.connection.on('error', function(err) {
    log.error('Mongoose default connection error: ' + err);
    process.exit(1);
  });

  mongoose.connection.on('open', function(err) {

    if (err) {
      log.error('Mongoose default connection error: ' + err);
      process.exit(1);
    }

    log.info(
      '%s v%s ready to accept connections on port %s in %s environment.',
      server.name,
      config.get("version"),
      config.get("port"),
      config.get("env")
    );

    // require('./routes');

  });

  global.db = mongoose.connect(config.get("mongo.url"));

});