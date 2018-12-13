const express = require('express');
const session = require('express-session');
const parseurl = require('parseurl');

let app = express();

app.use(session({
    secret: 'keyborad cat',
    resave: false,
    saveUninitialized: true
}));

app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = {};
    }
    var pathname = parseurl(req).pathname;

    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    next();
});
