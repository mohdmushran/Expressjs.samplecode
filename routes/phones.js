var express = require('express');
var router = express.Router();

var phonesCtrl = require('../controllers/phones.controller');
var middleware = require('../middleware/jwt');

router.post('/phone-listing', middleware.isJwt, phonesCtrl.phoneListing);
router.post('/user-mobile-details',middleware.isJwt, phonesCtrl.phoneDetails);


module.exports = router;