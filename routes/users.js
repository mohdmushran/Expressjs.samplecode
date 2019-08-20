var express = require('express');
var router = express.Router();

var usersCtrl = require('../controllers/users.controller');

router.post('/user-registration', usersCtrl.registration);
router.post('/user-login', usersCtrl.login);


module.exports = router;
