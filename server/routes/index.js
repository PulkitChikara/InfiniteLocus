const express = require('express');//fetch the already present instance of express
const router = express.Router();
const passport = require('passport');
//adding controller


router.use('/users', require('./users'));

module.exports = router;
