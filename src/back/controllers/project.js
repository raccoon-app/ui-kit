'use strict';

const router = require('express').Router;
const jwt = require('jsonwebtoken');
const Project = require('./../models/Project');
const auth = require('./../services/auth/auth.middleware');
const STATUS = require('./../common/const').STATUS;

module.exports = router()
    .get('/', getAll)
    .get('/get/:id', auth.isAuthenticated, get)
    .get('/getByUser', getByUser)
    .get('/find', find)
    .post('/add', auth.isAuthenticated, auth.requiredRole('admin'), add)
    .put('/update/:id', updateById)
    .delete('/del/:id', deleteById);

function getAll(req, res) {
    return Project.find(req.params)
        .then(result => {
            if (result) {
                res.status(STATUS.OK).send(result);
            } else {
                res.status(STATUS.NOTFOUND).json({ message: 'Not found.'});
            }
        })
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}


function getByUser(req, res) {
    return Project.aggregate([
        { $project: { _id: 0, members: 1, name: 1 } },
        { $unwind: '$members' },
        { $match: { 'members.userId': 'aaa@aaa.aaa' } },
        { $project: { name: 1, userId: '$members.userId', role: '$members.role' } }
    ])
    .then(result => {
        console.log(result);
        if (result) {
            res.status(STATUS.OK).send(result);
        } else {
            res.status(STATUS.NOTFOUND).send({ message: 'Project not found.' });
        }
    })
    .catch(err => res.status(STATUS.SERVERERROR).json(err));

}

function get(req, res) {
    return Project.find({ _id: req.params.id })
        .then(result => {
            if (result) {
                res.status(STATUS.OK).send(result);
            } else {
                res.status(STATUS.NOTFOUND).json({ message: 'Project not found.' });
            }
        })
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function find(req, res) {
    let query = req.query;

    return Project.find(query)
        .then(result => {
            if (result) {
                res.status(STATUS.OK).send(result);
            } else {
                res.status(STATUS.NOTFOUND).json({ message: 'Project not found.' });
            }
        })
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function add(req, res) {
    let query = req.body;

    return Project.findOne(query)
        .then(result => {
            if (result) {
                res.status(STATUS.CONFLICT).send({ message: 'Project already exist.'});
            } else {
                let newProject = new Project(req.body);

                return newProject.save();
            }
        })
        .then(result => res.status(STATUS.OK).send(result))
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function updateById(req, res) {
    return Project.update(
        { _id: req.params.id },
        { $set: req.body})
        .then(result => res.status(STATUS.OK).send(result))
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

function deleteById(req, res) {
    return Project.remove({ _id: req.params.id })
        .then(result => res.status(STATUS.OK).send(result))
        .catch(err => res.status(STATUS.SERVERERROR).json(err));
}

// Middleware for check required project role for user
// Info about user get from header of request
// Authorization: Bearer <token>
exports.requiredProjectRole = (roleName) => {
    return function(req, res, next) {
        if (!req.headers.authorization) {
            return res.send(STATUS.FORBIDDEN);
        }

        let projectId = req.params.id;

        // [0] member it's name of auth-scheme - Bearer
        let token = req.headers.authorization.split(' ')[1];
        let decodedUser = jwt.decode(token);

        return User.findOne({_id: decodedUser.id})
            .then((result) => {
                return Project.findOne({_id: projectId, 'members.userId': result.email});
            })
            .then((result) => {
                if (result && result.role === roleName) {
                    next();
                } else {
                    res.send(STATUS.FORBIDDEN);
                }
            })
            .catch(err => res.send(STATUS.FORBIDDEN).json(err));
    }
};