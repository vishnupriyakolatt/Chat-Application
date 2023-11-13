const express = require('express');
const router = express.Router();


const { registerUser } = require('../controllers/userController');

router.route('/').post(registerUser);
// router.route('/login',authuser)

module.exports = router;
