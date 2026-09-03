const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
      {
        from: path.resolve(__dirname, 'src/image'),
        to: path.resolve(__dirname, 'dist/image')
      }]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),    
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg|webp)$/,
        type: 'asset/resource',
      },
      /*
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      */
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};




