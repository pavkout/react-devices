var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var aliases = require('./aliases');

var isDebug =
  _.includes(process.argv, '--production') || _.includes(process.argv, '-p')
    ? false
    : true;

console.log(isDebug ? 'Building your stuff...' : 'Compiling for production...');
// webpack.config.js
if (process.env.NODE_ENV === 'development') {
  var loaders = ['react-hot', 'babel-loader'];
} else {
  var loaders = ['babel-loader'];
}

const jsRules = {
  test: /.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: {
    presets: ['es2015', 'react', 'stage-0'],
    babelrc: false
  }
};

const cssRules = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [autoprefixer]
      }
    }
  ]
};

module.exports = {
  context: path.resolve(__dirname, '../../'),
  // Better set this for development, because it creates source maps
  devtool: isDebug ? '#inline-source-map' : false,
  entry: {
    index: 'index.js',
    example: 'examples/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../../'), 'node_modules'],
    alias: aliases
  },
  devServer: {
    inline: true,
    port: 8080,
    contentBase: '../../examples'
  },
  module: {
    rules: [jsRules, cssRules]
  }
};
