// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const log = require('./logger/logger');
const index = require('./routes/index');
const db = require('./node-service/db');
// const sessionApi = require('./routes/api/api');
const app = express();

process.on('uncaughtException', function (error) {
    log.error('回调函数发生未捕获的异常', error);
    log.error('errStack:', error.stack);
});
app.use(log4js.connectLogger(log,{level:'auto'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', index);

module.exports = app;
