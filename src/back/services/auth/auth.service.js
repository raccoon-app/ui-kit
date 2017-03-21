'use strict';

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const env = require('../../../../env');
const User = require('../../models/User');
const STATUS = require('./../../common/const').STATUS;

const authenticate = expressJwt({secret : env.SESSION_SECRET});

const strategies = [];

exports.init = () => {
    strategies.forEach(strategy => strategy.init());
};

// This function called from modules with strategies and there each strategy register itself
exports.registerStrategy = (strategy) => strategies.push(strategy);

exports.logout = (req, res) => {
    req.logout();
    res.sendStatus(STATUS.OK);
};

// Function expects in request header next record
// Authorization: Bearer <token>
exports.isAuthenticated = authenticate;

// Function expects in request header next record
// Authorization: Bearer <token>
exports.requiredRole = (roleName) => {
    return function(req, res, next) {
        if (!req.headers.authorization) {
            return next(res.send(STATUS.FORBIDDEN));
        }

        // [0] member it's name of auth-scheme - Bearer
        let token = req.headers.authorization.split(' ')[1];
        let decodedUser = jwt.decode(token);

        console.log(decodedUser);

        return User.findOne({_id: decodedUser.id, role: roleName})
            .then((result) => {
                console.log(result);
                if (result) {
                    console.log('aaaaaaa');
                    next();
                } else {
                    res.send(STATUS.FORBIDDEN);
                }
            })
            .catch(err => res.send(STATUS.FORBIDDEN).json(err));
    }
};