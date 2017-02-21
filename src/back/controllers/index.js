const router = require('express').Router;

module.exports = router()
	.use('/user', require('./user'))
	.use('/project', require('./project'))
	.use('/', require('./static'));
