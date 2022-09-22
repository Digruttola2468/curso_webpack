# js-portfolio

## Configuracion de webpack.config.js

Creamos un archivo `webpack.config.js` para colocar configuraciones para nuestro proyecto , este archivo es nuestro recurso principal para que webpack pueda entender por ejemplo nuestro punto de entrada para ejecutar dicha pagina , hacia donde va a enviar la compilacion de nuestro proyecto y cuales son las extenciones que vamos a utilizar.

```JS
const path = require('path');

module.exports = {
    entry: './src/index.js', //cual es nuestro punto de entrada de nuestra aplicacion
    output: {                //cual es nuestro punto de salida
        path: path.resolve(__dirname, 'dist'), //donde se encuentra nuestro proyecto distribucion
        filename: 'main.js' //Nombre del archivo a crear
    },
    //Que extensiones de nuestro proyecto usaremos
    resolve: {
        extensions: ['.js'] 
    }
}
```

Luego podemos simplificar la linea de comando `webpack --mode production` a `npm run build` colocando en nuestro archivo `package.json` lo siguiente:

```JSON
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    
    "build": "webpack --mode production"
  }
  ...
```
