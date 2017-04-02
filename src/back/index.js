/* eslint-disable no-console */

'use strict';

const
    express = require('express'),
    bootstrap = require('./bootstrap'),
    env = require('../../env'),
    controllers = require('./controllers');

const app = express();

bootstrap(app)
    .listen(env.PORT, () => console.log(`back: listening on ${env.PORT}`));

module.exports = app;
