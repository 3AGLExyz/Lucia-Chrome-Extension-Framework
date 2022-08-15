const path = require('path');

module.exports = {
    mode: 'development',
    entry: './lucia/lucia.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: 'lucia.js',
        path: path.resolve(__dirname, 'extension/js'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
};