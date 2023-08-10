const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    target: "node",
    externals: [nodeExternals()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 2000
    },
    watch: true
}