'use strict';

const router = require('express').Router;
const localMiddleware = require('./local');
const authService = require('./auth.service');

authService.init();

module.exports = router()
    .use('/local', localMiddleware)
    .get('/account', authService.isAuthenticated, authService.getAccount)
    .get('/logout', authService.logout);
