const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://root:123456@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=admin_user';
const urlParser = { useNewUrlParser: true };
const dbName = 'admin_user';

const client = new MongoClient(url, urlParser);

module.exports.startClient = client.connect(function (err) {
    assert.equal(null, err);
    console.log('connected successfully to ' + dbName);
});

module.exports.dropClient = client.close();

