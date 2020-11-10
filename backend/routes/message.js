const express = require('express');

const { postMessage } = require('../controllers/message');

const router = express.Router();

router.post('/', postMessage);

module.exports = router;
