'use strict';

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    members: Array,
    data: mongoose.Schema.Types.Mixed,
}, {
    collection: 'projects'
});

module.exports = mongoose.model('Project', projectSchema);