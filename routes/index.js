const express = require('express');
const router = express.Router();

router.get('/testApi', (req, res, next) => {
    return res.json({ 'stateCode': 201 });
});

module.exports = router;
