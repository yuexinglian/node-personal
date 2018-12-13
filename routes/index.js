const express = require('express');
const log = require('../logger/logger');
const createError = require('http-errors');
const router = express.Router();

const insertDocuments = require('../node-service/db').insertDocuments;
const selectDocuments = require('../node-service/db').selectDocuments;

router.get('/testApi', (req, res, next) => {
    log.info('链接到服务');
    return res.json({ 'status': 200 });
});

router.post('/login', (req, res, next) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const loginType = req.body.status;
    log.info(req.body);
    const document = { 'userName': userName, 'password': password };
    if (loginType) {
        selectDocuments(document, 'user').then((result) => {
            if (result !== null) {
                log.info('查询用户账户密码匹配成功');
                return res.json({ 'status': 200 });
            } else {
                log.info('用户名或密码输入错误');
                return res.json({ 'status': 400, 'msg': '用户名或密码输入错误' });
            }

        }).catch((error) => {
            log.info('查询用户账户密码失败');
            next(createError(error), 500);
        });

    } else {
        insertDocuments([document], 'user').then((result) => {
            log.info('调用数据库接口成功');
            log.info(result);
            return res.json(result);
        }).catch((error) => {
            log.info('注册用户账号失败');
            next(createError(error, 500));
        });
    }

});

module.exports = router;
