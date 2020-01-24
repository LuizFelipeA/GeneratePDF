const express = require('express');
const router = express.Router();

const controller = require('./controllers/createPDF');

router.get('/createPDF', controller.index);

module.exports = router;