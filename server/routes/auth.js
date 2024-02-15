// auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post("/studentReg", authController.studentReg);

module.exports = router;
