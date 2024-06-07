const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './widget/widget.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    fallback: {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html', // This ensures the file is named correctly in the output directory
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  optimization: {
    minimize: true,
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            ecma: 5,
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, '../src')],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, 'widget'),
        ],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(tsx|ts)$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: /(node_modules|bower_components)/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: [path.resolve(__dirname, '../src')],
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        include: [path.resolve(__dirname, '../src')],
        use: ['url-loader'],
      },
    ],
  },
};
