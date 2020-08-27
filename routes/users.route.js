const express = require('express');
const router = express.Router();

const users = require('../controllers/users.controller');

router.post('/register', users.registerUser);

module.exports = router;