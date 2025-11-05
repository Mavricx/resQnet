const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alert.js');
const wrapAsync = require('../utils/wrapAsync.js');


router.route('/:id')
.get(wrapAsync(alertController.getAlert))

router.route('/')
.get(alertController.getAllAlerts)//get all alerts
.post(wrapAsync(alertController.createAlert))//create alert

module.exports = router;