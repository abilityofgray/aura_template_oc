const path = require('path');
//import path from 'path';
//import path from 'node:path';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
//import HtmlWebpackPlugin from 'html-webpack-plugin';
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { watch } = require('fs');
//import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
//import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';
//const SvgChunkWebpackPlugin = require("svg-chunk-webpack-plugin");
//import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';




module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  //watch: true,
  devServer: {
    static: './dist',
    port: 9000,
    historyApiFallback: true,
    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/, 
        use: "raw-loader",
      },
      {
        test: /\.twig$/,
        use: {
          loader: 'twig-loader',
          options: {
              // See options section below
              
          },
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          // keep original filenames and copy images to `dist/img/`
          filename: './image/[name][ext]', 
          //filename: path.join('icons', '[name].[contenthash][ext]'),
          //filename: 'img/[name].[hash:8][ext][query]',
        },
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'svg-sprite-loader'},
          'svg-transform-loader',
          'svgo-loader'
        ]
      }
      

    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({ 
      template: './index.twig',
      //inject: true,
      /*inject: 'body', */
    }),
    new HtmlWebpackPlugin({
      filename: './blocks/header.twig',
      template: './blocks/header.twig',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: './blocks/header-nav.twig',
      template: './blocks/header-nav.twig',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: './blocks/catalog.twig',
      template: './blocks/catalog.twig',
      inject: false,
    }),
    new MiniCssExtractPlugin({ filename: 'stylesheet.css'}),
    
  ],
 
};