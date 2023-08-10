const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        app: "./src/app.ts"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    target: "node",
    externals: [nodeExternals()],
    watch: true
}