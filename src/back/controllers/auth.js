'use strict';

// Authorization routes

const router = require('express').Router;
const localAuth = require('./../services/auth/strategies/local.auth');
const strategies = require('./../services/auth/strategies');

strategies.init();

module.exports = router()
    .post('local/signup', localAuth.postSignup)
    .post('/local/login', localAuth.postLogin)
    .get('/logout', strategies.logout);
