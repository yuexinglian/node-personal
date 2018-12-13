var log4js = require('log4js');
var log4js_config = require('../config/logConf.json');
var config = require('../config/config');
log4js.configure(log4js_config);
const log = log4js.getLogger(config.env);
module.exports = log;
