const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './src/lib/Widget.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: './demo.js',
        library: 'Widget',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: 'default' 
    }, 
    // target: 'node', // in order to ignore built-in modules like path, fs, etc.
    // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devServer: {
        host: '127.0.0.1',
        contentBase: './src/lib',
        port: 3355
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            { 
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
}