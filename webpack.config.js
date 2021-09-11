const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const smp = new SpeedMeasurePlugin()



module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      insert: "#loader",
      filename: "blo.css",
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img", to: "./img/" },

      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,"css-loader","sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,"css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
};


