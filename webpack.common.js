const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@api': path.resolve(__dirname, 'src', 'api'),
      '@lib': path.resolve(__dirname, 'src', 'lib'),
      '@views': path.resolve(__dirname, 'src', 'views'),
    },
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.pug$/, use: 'pug-plain-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
};
