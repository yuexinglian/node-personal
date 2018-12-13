const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();

// let store = new MongoDBStore({
//     collection: 'loginSession'
// });

// app.use(session({
//     name: 'token',
//     cookie: {
//         domain: 'localhost:8080',
//         maxAge: 100000,
//         httpOnly: true
//     },
//     genid: function (req) {
//         return genuuid(24);
//     },
//     secret: 'keyboard cat',
//     store: store
// }));
