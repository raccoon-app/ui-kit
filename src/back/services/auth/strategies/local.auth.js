const crypto = require('crypto');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const strategies = require('./common');
const jwt = require('jsonwebtoken');
const env = require('../../../../../env');
const STATUS = require('./../../../common/const').STATUS;

const User = require('../../../models/User');

strategies.register(this);

exports.init = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({ usernameField: 'email', session: false }, (email, password, done) => {
        User.findOne({ email: email.toLowerCase() }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { msg: `Email ${email} not found.` });
            }
            user.comparePassword(password, (err, isMatch) => {
                if (err) { return done(err); }
                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, { msg: 'Invalid email or password.' });
            });
        });
    }));
};

exports.postLogin = (req, res, next) => {
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password cannot be blank').notEmpty();
    req.sanitizeBody('email').normalizeEmail({ remove_dots: false });

    const errors = req.validationErrors();

    if (errors) {
        return res.status(STATUS.OK).send({errors});
    }

    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            return res.status(STATUS.NOTFOUND).send({errors: info});
        }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            // https://github.com/auth0/node-jsonwebtoken contains example with another algorithm. TODO: compare and choose
            req.token = jwt.sign({
                id: req.user.id
            }, env.SESSION_SECRET, {
                expiresIn: '12h'
            });
            return res.status(STATUS.OK).json({
                token: req.token
            });
        });
    })(req, res, next);
};

exports.postSignup = (req, res, next) => {
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password must be at least 4 characters long').len(4);
    req.sanitizeBody('email').normalizeEmail({ remove_dots: false });

    const errors = req.validationErrors();

    if (errors) {
        return res.status(STATUS.BADREQUEST).send({errors});
    }

    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) { return next(err); }
        if (existingUser) {
            return res.sendStatus(STATUS.CONFLICT);
        }
        user.save((err) => {
            if (err) { return next(err); }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                req.token = jwt.sign({
                    id: req.user.id
                }, env.SESSION_SECRET, {
                    expiresIn: '12h'
                });
                return res.status(STATUS.OK).json({
                    token: req.token
                });
            });
        });
    });
};
