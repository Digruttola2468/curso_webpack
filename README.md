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

## Babel Loader para JavaScript

Nosotros prepararemos nuestro codigo js para que sea compatible a todos los navegadores, para esto integramos Babel. Para eso debemos agregar a nuestro proyecto las siguientes dependencias:

`npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D`

`babel-loader` nos permite usar babel con webpack
`@babel/core` es babel en general
`@babel/preset-env` trae y te permite usar las ultimas características de JavaScript
`@babel/plugin-transform-runtime` te permite trabajar con todo el tema de asincronismo como ser async y await

Debes crear el archivo de configuración de babel el cual tiene como nombre `.babelrc`

```JSON
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```

Para comenzar a utilizar webpack debemos agregar la siguiente configuración en `webpack.config.js`

```JSON
{
...,
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
  }
}
```

Babel te ayuda a transpilar el código JavaScript, a un resultado el cual todos los navegadores lo puedan entender y ejecutar. Trae “extensiones” o plugins las cuales nos permiten tener características más allá del JavaScript común

[babel-loader](https://webpack.js.org/loaders/babel-loader/)

[ECMAScript Modules](https://webpack.js.org/guides/ecma-script-modules/)

## HTML en WebPack

Colocamos la siguiente linea de comando para que webpack pueda entender nuestro HTML y preparalo para nuestra carpeta dist
`npm install html-webpack-plugin -D`.

Y nuestro webpack quedara asi:

```JSON
...,
plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
```

## Loaders para CSS y preprocesadores de CSS

`npm install mini-css-extract-plugin css-loader -D` ante este comando instalamos los preprocesadores de CSS y los loaders.

WebPack al momento de subir a produccion, coloca automaticamente CSS en nuestro HTML.

**Loaders** \
Fuera de contexto, webpack solamente entiende JavaScript y JSON. Los loaders nos permite procesar archivos de otros tipos para convertirnos en módulos válidos que serán consumidos por nuestras aplicaciones y agregadas como dependencias.

En alto nivel, los loaders poseen 2 configuraciones principales:

1. test - propiedad que identifica cuáles archivos deberán ser transformados
2. use - propiedad que identifica el loader que será usado para transformar a dichos archivos

**Plugins** \
Mientras los loaders transforman ciertos tipos de módulos, los plugins _son utilizados para extender tareas específicas, como la optimización de paquetes, la gestión de activos y la inyección de variables de entorno.

Una vez importado el plugin, podemos desear el personalizarlos a través de opciones.

Para trabajar con procesadores vamos a installar `npm install stylus stylus-loader -D` que seria un loader

[css-loader](https://webpack.js.org/loaders/css-loader/)

[style-loader](https://webpack.js.org/loaders/style-loader/)

[MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

## Copia de archivos con Webpack

Cuando estes en un proyecto ves la necesidad de mover archivos o elementos dentro de la carpeta `src` a la carpeta de `dist` entonces usaremos el siguiente plugin: `npm install copy-webpack-plugin -D`

donde en `webpack.config.js` colocamos lo siguiente:

```JSON
plugins: [
        ...,
        new CopyPlugin({
            //Cuales son los elementos que vamos a utilizar?
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
    ]
```
