const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://root:123456@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=admin_user';
const urlParser = { useNewUrlParser: true };
const client = new MongoClient(url, urlParser);
let admin_user = {};

module.exports.startClient = client.connect(function (err) {
    console.log('链接数据库成功');
    admin_user = client.db('admin_user');

});

module.exports.dropClient = client.close();

module.exports.insertDocuments = function (documents, collectionName) {
    return new Promise((resolve, reject) => {
        const collection = admin_user.collection(collectionName);
        collection.insertMany(documents, function (err, result) {
            if (err) {
                console.log('添加用户失败');
                reject(err);
            }
            console.log('数据库结果：');
            console.log(result);
            assert.equal(err, null);
            assert.equal(documents.length, result.result.n);
            console.log('查询添加结果');
            console.log('Inserted ' + documents.length + ' documents into the collection');
            resolve(result);
        });

    });
};

module.exports.selectDocuments = function (selectDocument, collectionName) {
    return new Promise((resolve, reject) => {
        const collection = admin_user.collection(collectionName);
        collection.findOne(selectDocument, function (err, result) {
            if (err) {
                console.log(err.Error);
                console.log('查询条件文档出错');
                reject(err);
            }
            console.log('查询条件文档成功');
            console.log(result);
            resolve(result);
        });
    });
};

