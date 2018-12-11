const express = require('express');
const router = express.Router();

const operateDB = require('../node-service/operateDB');

router.get('/testApi', (req, res, next) => {
    return res.json({ 'stateCode': 201 });
});

router.post('/login', (req, res, next) => {
    const userName = req.body.userName;
    const password = req.body.password;
    console.log(req.body);
    const document = [{ 'userName': userName, 'password': password }];
    let result = operateDB.insertDocuments(document, 'user', 'admin_user');
    console.log(result);

});

module.exports = router;
