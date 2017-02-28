const layout = require('../layout');

module.exports = {
    contentBase: layout.dist.buildDir,
    hot: true,
    inline: true,
    progress: true,
    host: 'localhost',
    port: 8080,
    proxy: {
        '*':'localhost:9000'
    }
};
