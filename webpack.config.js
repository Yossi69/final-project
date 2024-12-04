const path = require('path');

module.exports = {
    entry: {
        signup: './src/js/sign-up.js',
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    }
};
