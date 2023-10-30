//import { Router } from 'express'
//import * as authCtrl from '../controllers/auth.controller'
//const router = Router()
const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');

router.post('/signin', authCtrl.sign_in)

module.exports = router;
//export default router
