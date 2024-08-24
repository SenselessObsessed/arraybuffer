const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'main.js'
    }
}