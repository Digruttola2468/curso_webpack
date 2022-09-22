const path = require('path');

//Entry -> cual es nuestro punto de entrada de nuestra aplicacion
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //donde se encuentra nuestro proyecto
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    }
}
