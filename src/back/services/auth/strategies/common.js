'use strict';

// Initialization of all strategies and common method - logout

const STATUS = require('./../../../common/const').STATUS;

const strategies = [];

exports.init = () => {
    strategies.forEach(strategy => strategy.init());
};

// This function called from modules with strategies and there each strategy register itself
exports.register = (strategy) => strategies.push(strategy);

exports.logout = (req, res) => {
    req.logout();
    res.sendStatus(STATUS.OK);
};