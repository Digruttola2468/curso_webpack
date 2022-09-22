const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

//Entry -> cual es nuestro punto de entrada de nuestra aplicacion
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //donde se encuentra nuestro proyecto
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                // Test declara que extensión de archivos aplicara el loader
                test: /\.js$/,
                // Use es un arreglo u objeto donde dices que loader aplicaras
                use: {
                    loader: "babel-loader"
                },
                // Exclude permite omitir archivos o carpetas especificas
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]


}
