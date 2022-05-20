const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
module.exports = {
    entry: './src/pages/script.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.[hash].js',
      clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'index.html'),
          cache: false,
        }),
        new MiniCssExtractPlugin(),
      ],
    mode: "development",
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              'postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
              },
              {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
              },
          ]
    },
    devServer: {
        compress: true,
        port: 8080, 
        open: true 
      },
  }