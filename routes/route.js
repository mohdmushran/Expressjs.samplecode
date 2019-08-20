var express = require('express');
var router = express.Router();

var jobsCtrl = require('../controllers/jobs.controller');

router.get('/testing', jobsCtrl.getInfo);

router.get('/test',function(req,res) {
	res.send('sdfsdf');
//	res.send('test', { title: 'Express' });
});

module.exports = router;