const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		filename: 'build.js',
		path: path.join(__dirname, '/dist')},
	module:{
		rules:[{
			test: /\.js$/,
			exclude: [/node_modules/,/dist/],
			loader: 'babel-loader'
		}]
	},
	plugins:[
		new HWP(
		{template: path.join(__dirname,'/src/index.html')}
		)
	]
}
