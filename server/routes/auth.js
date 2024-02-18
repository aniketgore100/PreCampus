// auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post("/studentReg", authController.studentReg);
router.post("/register", authController.register);
router.post
// router.post("/login", authController.login);

module.exports = router;
