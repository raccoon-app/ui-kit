'use strict';

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const env = require('../../../../env');
const User = require('../../models/User');
const STATUS = require('./../../common/const').STATUS;

// Function expects in request header next record
// authorization: Bearer <token>
const authenticate = expressJwt({secret : env.SESSION_SECRET});

exports.isAuthenticated = authenticate;

// Function expects in request header next record
// authorization: Bearer <token>
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
                if (result) {
                    next();
                } else {
                    res.send(STATUS.FORBIDDEN);
                }
            })
            .catch(err => res.send(STATUS.FORBIDDEN).json(err));
    }
};