var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/scripts/app.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread' },
      { test: /\.json$/, loaders: [ 'json' ], exclude: /node_modules/ },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=2&minetype=image/jpg&name=./images/[name]_[hash].[ext]'
      },
      {
        test: /\.(eot|ttf|svg|woff)\??.*$/i,
        loader: 'file?name=fonts/[name].[ext]'
      },
    ]
  },
  resolve: {
      extensions: ['', '.js'],
      root: './src',
      alias: {}
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

