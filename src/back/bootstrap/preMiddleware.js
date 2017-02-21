const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');

module.exports = (app) => app
    .use(expressValidator())
	.use(bodyParser.json({ limit: '15mb' }))
	.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
	.use(passport.initialize());