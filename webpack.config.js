const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'js/bundle.js'
    },
    devServer: {
    publicPath: '/dist/',
    contentBase: `./public/`,
    watchContentBase: true,
    historyApiFallback: true

    },
    watch: false,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
            test: /\.(sa|sc|c)ss$/,
            use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../',
                      hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                  'css-loader',
                  'sass-loader',
                ],
              },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              options: {
                        presets: ['@babel/preset-env']
                    }
            }
        ]
    },
    plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/style.css',
    }),
  ],
}
