'use strict';

const path = require('path');

const
    srcDir = path.join(__dirname, 'src'),
    distDir = path.join(__dirname, 'dist');

module.exports = {
    src: {
        front: {
            jsEntry: path.join(srcDir, 'js/app.js'),
            htmlEntry: path.join(srcDir, 'index.html'),
            stylesEntry: path.join(srcDir, 'scss/style.scss')
        }
    },
    dist: {
        buildDir: path.join(distDir, 'build'),
        releaseDir: path.join(distDir, 'release')
    }
};
