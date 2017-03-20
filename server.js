/* eslint-disable */
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var httpProxy = require('http-proxy');
var app = new (require('express'))();
var port = 3300;
global.__COOKIE__ = null;

var compiler = webpack(config);
var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3060'
});

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  global.__COOKIE__ = req.get("cookie");
  res.sendFile(__dirname + '/index.html');
});

app.use("/api",function(req,res){
  proxy.web(req,res,{target: 'http://localhost:3060'});
});

//文件加载
app.use("/static/bundle.js",function(req,res){
  res.sendFile(__dirname + '/dist/bundle.js');
});
app.use("/static/vendor.js",function(req,res){
  res.sendFile(__dirname + '/dist/vendor.js');
});

//监听
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
