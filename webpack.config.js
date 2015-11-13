const webpack = require("webpack");
//creamos la constante para guardar webpack
const path    = require("path");
//usamos path para manejar mejor las rutas
const srcPath = path.join(__dirname, "src");
// __dirname se refiere a la ubicacion
// donde se encuentra este archivo
// con path join juntamos esta ubicacion con
//la carpeta src
const HtmlWebpackPlugin = require("html-webpack-plugin");
//es un plugin de webpack para poder injectar los js en un archivo html

module.exports = {
	entry: {
		app: path.join(srcPath, "js/index.js")
		//se selecciona el archivo main de donde se importaran los demas js
	},
	output: {
		filename: '[name].js',
		//declara el nombre del archivo,
		//[name] toma el nombre que definamos en entry
		//en este caso app 
		path: path.join(__dirname, "dist")
		//la ruta donde se mandara el archivo js
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
				//los loaders sirven para modificar los archivos
				//en este caso babel para poder pasar la sintaxis de
				//ecmascript6 a ecmascript5 que reconocen los navegadores
				//exclude va a evitar los packetes que no se requieran de esa carpeta
			}
		]
	},
	resolve: {
		root: srcPath,
		//se elige la ruta padre para evitar tener que poner "../"
		//y salir de la carpeta y hacer un import o require
		//en este caso los imports empezaran desde src
		extensions: [".js", ""],
		//se eligen las extensiones que usara webpack
		modulesDirectories: ['node_modules']
		//se declara el directorio donde estan los modulos
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: 'src/index.html'
		})
		//en esta seccion se ponen los plugins que hayas instalado
		//en este caso el de html para injectar los js
	],
	debug: true,
	devtool: "source-map",
	//para que nos genere source maps
	//y puedas debugear sin importar que ya este compilado todo en un archivo
	devServer: {
		contentbase: './dist'
		//la carpeta de donde se serviran los archivos
	}
	//para poder crear un servidor que sirva los archivos
}


