let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack')
module.exports = {

entry: './src/index.js',
output: {
path: path.resolve(__dirname,"dist"),
filename: "bundle.js"
},
plugins: [
 new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery",
	"window.jQuery": "jquery",
	Popper:'popper.js'
}),   
new HtmlWebpackPlugin()
],module :{
    rules: [{ test : /\.html/, use:'html-loader'},
            { test : /\.css/, use:['style-loader','css-loader']},
            { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: 'file-loader?name=fonts/[name].[ext]'}]
            
}
};