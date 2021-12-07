const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const updateImportMap = (buffer) => {
  const importMap = JSON.parse(buffer.toString());
  let stringMap = JSON.stringify(importMap, null, 2);
  stringMap = stringMap.replace(/node_modules/g, 'web_modules');

  return stringMap;
};

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
        transform(content) {
          return updateImportMap(content);
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/core-js-bundle/minified.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/zone.js/dist/zone.min.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/import-map-overrides/dist/import-map-overrides.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/systemjs/dist/system.min.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/systemjs/dist/extras/amd.min.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/systemjs/dist/extras/named-exports.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/systemjs/dist/extras/named-register.min.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules/single-spa/lib/system/single-spa.min.js*',
        ),
        to: path.resolve(__dirname, 'dist'),
        transformPath(targetPath, absolutePath) {
          return Promise.resolve(targetPath.replace('node_modules', 'web_modules'));
        },
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
  ],
  devtool: 'source-map',
  externals: /^.*@mf-setup\/.+$/,
  devServer: {
    historyApiFallback: true,
    writeToDisk: true,
  },
};
