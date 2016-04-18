'use strict';

const path = require('path');

const
    srcDir = path.join(__dirname, 'src'),
    targetDir = path.join(__dirname, 'target');

module.exports = {
    src: {
        front: {
            jsEntry: path.join(srcDir, 'js/app.js'),
            htmlEntry: path.join(srcDir, 'index.html'),
            stylesEntry: path.join(srcDir, 'scss/style.scss')
        }
    },
    target: {
        buildDir: path.join(targetDir, 'build'),
        releaseDir: path.join(targetDir, 'release')
    }
};
