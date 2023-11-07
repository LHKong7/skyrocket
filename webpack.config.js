const path = require('path');
console.log("__dirname: ", __dirname)
module.exports = {
    mode: 'development',
    entry: {},
    devServer: {
        'static': path.resolve(__dirname, './coverage/lcov-report/'),
        compress: true,
        port: 9000,
    },
    output: {},
};
