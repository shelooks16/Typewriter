const path = require('path');
const env = require('yargs').argv.env;

const name = 'typewriter';
const mode = env === 'prod' ? 'production' : 'development';
const filename = env === 'prod' ? `${name}.min.js` : `${name}.js`;

const config = {
  mode,
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename,
    path: path.join(__dirname, 'build'),
    library: name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  }
};

module.exports = config;
