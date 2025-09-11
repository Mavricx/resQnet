import express from 'express';
const router = express.Router();
import * as alertController from "../controllers/alert.js"
import wrapAsync from "../utils/wrapAsync.js"


router.route('/:id')
.get(wrapAsync(alertController.getAlert))

router.route('/')
.get(alertController.getAllAlerts)//get all alerts
.post(wrapAsync(alertController.createAlert))//create alert

export default router;