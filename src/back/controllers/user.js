'use strict';

const router = require('express').Router;
const User = require('./../models/User');
const auth = require('./../services/auth/auth.service');
const STATUS = require('./../common/const').STATUS;

module.exports = router()
    .get('/', auth.isAuthenticated, auth.requiredRole('admin'), getAll)
    .get('/account', auth.isAuthenticated, getAccount)
    .get('/get/:id', auth.isAuthenticated, getById)
    .get('/find', auth.isAuthenticated, findByQuery)
    .post('/add', auth.isAuthenticated, auth.requiredRole('admin'), addUser)
    .put('/update/:id', auth.isAuthenticated, auth.requiredRole('admin'), updateById)
    .delete('/del/:id', auth.isAuthenticated, auth.requiredRole('admin'), deleteById);

function getAll(req, res) {
    return User.find(req.params)
        .then(result => {
            if (result) {
                res.status(STATUS.OK).send(result);
            } else {
                res.status(STATUS.NOTFOUND).json({ message: 'Not found.'});
            }
        })
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function getById(req, res) {
    return User.find({ _id: req.params.id })
        .then(result => {
            if (result) {
                res.status(STATUS.OK).send(result);
            } else {
                res.status(STATUS.NOTFOUND).json({ message: 'User not found.' });
            }
        })
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function getAccount(req, res) {
    User.findById(req.user.id, (err, user) => {
        if (err) { return next(err); }
        let userToSend = {
            email: user.email,
            profile: user.profile
        };
        res.status(STATUS.OK).send(userToSend);
    });
}

function findByQuery(req, res) {
    let query = req.query;

    return User.find(query)
        .then(result => {
            if (result) {
                res.status(STATUS.OK).send(result);
            } else {
                res.status(STATUS.NOTFOUND).json({ message: 'User not found.' });
            }
        })
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function addUser(req, res) {
   req.checkBody('email', 'Email is not valid').isEmail();
   req.checkBody('password', 'Password must be at least 4 characters long').len(4);
   req.sanitizeBody('email').normalizeEmail({ remove_dots: false });

   const errors = req.validationErrors();

   if (errors) {
       return res.status(400).send({errors});
   }

   User.findOne({ email: req.body.email })
       .then(result => {
            if (result) {
                res.status(STATUS.CONFLICT).send({ message: 'Project already exist.'});
            } else {
                let newUser = new User(req.body);

                return newUser.save();
            }
        })
       .then(result => res.status(STATUS.OK).send(result))
       .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function updateById(req, res) {
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password must be at least 4 characters long').len(4);
    req.sanitizeBody('email').normalizeEmail({ remove_dots: false });

    const errors = req.validationErrors();

    if (errors) {
        return res.status(400).send({errors});
    }

    return User.update(
        { _id: req.params.id },
        { $set: req.body})
        .then(result => res.status(STATUS.OK).send(result))
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function deleteById(req, res) {
    return User.remove({ _id: req.params.id })
        .then(result => res.status(STATUS.OK).send(result))
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

