var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/app.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread' },
      { test: /\.json$/, loaders: [ 'json' ], exclude: /node_modules/ },
      { test: /\.(eot|svg|ttf|woff|woff2|png)\w*/, loader: 'file'}
    ]
  },
  resolve: {
      extensions: ['', '.js'],
      root: './src',
      alias: {}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  devtool : 'source-map'
};

