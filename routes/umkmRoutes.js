const express = require('express');
const router = express.Router();
const umkmController = require('../controllers/umkmController');

router.post('/umkm', umkmController.createUMKM);

module.exports = router;
