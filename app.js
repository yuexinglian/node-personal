// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const db = require('./node-service/db');
const app = express();

process.on('uncaughtException', function () {
    // console.error('回调函数发生未捕获的异常', err);
    // console.error('errStack:' + err.stack);
});

db.startClient();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', index);

module.exports = app;
