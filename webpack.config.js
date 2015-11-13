const webpack = require("webpack");
const path    = require("path");
const srcPath = path.join(__dirname, "src");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: path.join(srcPath, "js/index.js")
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, "dist")
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		root: srcPath,
		extensions: ["js", ""],
		modulesDirectories: ['node_modules']
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: 'src/index.html'
		})
	],
	debug: true,
	devtool: "source-map",
	devServer: {
		contentbase: './dist'
	}
}


