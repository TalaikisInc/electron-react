const webpack = require('webpack')
const { resolve, join } = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Electron',
  template: './public/index.html',
  filename: './index.html'
})

const hotModulePlugin = new webpack.HotModuleReplacementPlugin()

module.exports = {
  entry: ['webpack/hot/dev-server', './src/index.js'],
  target: 'electron-renderer',
  output: {
    path: resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    rules: [
	    {
		    test: /\.js$/,
		    exclude: [
		      /node_modules/,
		      /.json?/
		    ],
		    use: {
		      loader: 'babel-loader',
		      query: {
			      presets: ['@babel/preset-env','@babel/preset-react']
		      }
		    }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader']
			},
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    htmlPlugin,
    hotModulePlugin
  ],
  target: 'web',
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  devServer: {
	publicPath:'http://localhost:9000',
	contentBase: join(__dirname, 'assets'),
	open: false,
	lazy: false,
	compress: true,
	historyApiFallback: true,
	port: 9000
  }
}
