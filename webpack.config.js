const path = require('path');

module.exports = {
    entry: './src/lib/Widget.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: './demo.js',
        library: 'Widget',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: 'default' 
    }, 
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node-modules/
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