var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");// 默认的webpack 会将require("style.css")文件嵌入js文件中，使用该插件会将css从js中提取出来

module.exports = {
  devtool: 'source-map',
  // devtool: false,
  entry: {
    bundle: [
      './index.js'
    ],
    vendor: ['react', 'react-dom', 'react-router', 'redux','redux-form','material-ui']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      options:{
        postcss: function(){
          return [autoprefixer];
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",//和上面配置的入口对应
      filename: "vendor.js"//导出的文件的名称)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
};
