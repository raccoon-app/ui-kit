'use strict';

const expressJwt = require('express-jwt');
const env = require('../../../../env');
const User = require('../../models/User');

const authenticate = expressJwt({secret : env.SESSION_SECRET});

const strategies = [];

exports.init = () => {
    strategies.forEach(strategy => strategy.init());
};

exports.registerStrategy = (strategy) => strategies.push(strategy);

exports.getAccount = (req, res) => {
    User.findById(req.user.id, (err, user) => {
        if (err) { return next(err); }
        let userToSend = {
            email: user.email,
            profile: user.profile
        };
        res.status(200).send(userToSend);
    });
};






exports.logout = (req, res) => {
    req.logout();
    res.sendStatus(200);
};

exports.isAuthenticated = authenticate;