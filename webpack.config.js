var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client',
          './client/index.js',
  ],

  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      }
    })
  ],
};
