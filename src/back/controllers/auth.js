'use strict';

// Authentication routes

const router = require('express').Router;
const localAuth = require('./../services/auth/strategies/local.auth');
const authService = require('./../services/auth/auth.service');

authService.init();

module.exports = router()
    .post('local/signup', localAuth.postSignup)
    .post('/local/login', localAuth.postLogin)
    .get('/logout', authService.logout);
