const express = require('express');
const controller = require('../../controllers/market');

const router = express.Router();

router.get('/', controller.postData );

module.exports = router;
