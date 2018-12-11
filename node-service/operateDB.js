module.exports.insertDocuments = function (documents,collectionName,db='admin_user', callback) {
    const collection = db.collection(collectionName);
    collection.insertMany(documents, function (err, result) {
        console.log(result);
        assert.equal(err, null);
        assert.equal(documents.length, result.result.n);
        assert.equal(documents.length, result.ops.length);
        console.log('Inserted '+documents.length +' documents into the collection');
        console.log(collection.countDocuments());
        callback(result);
    });
};

