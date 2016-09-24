
module.exports={
  //Entrada en la aplicacion.
  entry:{
    // Nombre del fichero  que utilizará webpack para compilarlo
    app: './src/index.js'
  },
  //Indicamos la salida de la aplicación
  output: {
    //Nombre de la carpeta donde se guarda el fichero JS una vez compilado
    path: './build',
    //Nombre del fichero que se genera un vez compile el fichero de entrada.
    filname: 'bundle.js',
    //Directorio publico donde podemos hacer referencia al fichero en la aplicación.
    publicPath: '/build/'
  },
  //En este apartado se indica los fichero que debe tener en cuenta
  //webpack a la hora de compilar
  resolve:{
    extensions:['', '.js']
  },
  //Al tener instalador webpack-dev-server podemos crear un servidor dentro de este fichero.
  devServer:{
    host:'0.0.0.0',
    port: 8080,
    //Con esta definicion nos creara un servidor de desarrollo.
    inline:true
  },
  //En este apartado vamos a indicar que transformaciones vamos a realizar con el 'LOADER'
  // Babel.
  module:{
      loaders:[
        {
          //Extenciones de los archivos a tener en cuenta.
          test: /(\.js|.jsx)$/,
          //El tranformador que utilizara para tranformar ECMAScript 6  a un javaScript
          // que lo navegadores puedan entender.
          loader:'babel',
          //Carpeta a excluir
          exclude:'/node_modules/',
          query:{
            presets: ['es2015']
          }
        }
      ]
  }
}
