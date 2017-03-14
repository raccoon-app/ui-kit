'use strict';

const router = require('express').Router;
const Project = require('./../models/Project');

module.exports = router()
    .get('/get', getAll)
    .get('/getByUser', getByUser)
    .get('/find', find)
    .post('/add', add)
    .put('/update/:id', updateById)
    .delete('/del/:id', deleteById);

const STATUS = {
    OK: 200,
    CREATED: 201,
    BADREQUEST: 404,
    UNAUTHORIZED: 401,
    NOTFOUND: 404,
    CONFLICT: 409,
    SERVERERROR: 500
};

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