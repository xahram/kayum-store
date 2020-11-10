const express = require('express');

const router = express.Router();

//  bring createSuper method on controller
const { createSuper } = require('../controllers/superuser');

router.route('/').get(createSuper);

module.exports = router;
