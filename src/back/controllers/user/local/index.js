'use strict';

const router = require('express').Router,
    localAuthService = require('./local.auth.service');

module.exports = router()
    .post('/signup', localAuthService.postSignup)
    .post('/login', localAuthService.postLogin);

