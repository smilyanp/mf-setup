const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

module.exports = {
  entry: {
    'root-application': 'root-application.js',
  },
  output: {
    libraryTarget: 'system',
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'body',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          'import-map/importmap.json',
        ),
        to: path.resolve(__dirname, 'dist/import-map/'),
      },
      {
        from: path.resolve(
          __dirname,
          'environments/environment.js',
        ),
        to: path.resolve(__dirname, 'dist/config'),
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      inject: false,
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: '/web_modules/',
        replacement: '/node_modules/',
      },
    ]),
  ],
  devtool: 'source-map',
  externals: /^.*@mf-setup\/.+$/,
  devServer: {
    historyApiFallback: true,
    writeToDisk: true,
  },
};
