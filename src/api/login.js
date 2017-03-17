var app = new (require('express'))();
var bodyParser = require("body-parser");
var port = 3060;
var session = require("express-session");
var captchapng = require('captchapng');

app.use(session({
  secret: 'sessiontest',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 5000}
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login',function(req,res,next){
    let sess = req.session;
    if(sess.count){
      sess.count++;
    }else{
      sess.count =1;
    }
    if(req.body.username == 'steven' && req.body.password == 'lishudong123'){
        const result = {
              status: true,
              code: '1',
              msg: 'succ',
              username: req.body.username,
              password: req.body.password,
              count: sess.count
          };
          sess.status = true;
          sess.username = req.body.username;
          res.setHeader("Access-Control-Allow-Origin","*");
          res.setHeader("Content-Type","application/json");
          setTimeout(function() {
              res.json(result);
          }, 400);
    }else{
       const result = {
              status: false,
              code: '0',
              msg: 'fail',
              username: req.body.username,
              count: sess.count
          };
          sess.status = false;
          res.setHeader("Access-Control-Allow-Origin","*");
          res.setHeader("Content-Type","application/json");
          res.json(result);
    }
});

app.post('/loadAuth',function(req,res,next){
  let loginStatus = (typeof req.session.status === "undefined")?false:req.session.status;
  if(loginStatus){
      let result = {
          code : '1',
          username: req.session.username,
          msg : 'login auth OK!'
      };
      res.json(result);
  }else{
    let result = {
        code : '0',
        msg : 'no auth!'
    };
    res.json(result);
  }
});

app.get('/img',function(req,res,next){
    var pngNum = parseInt(Math.random()*9000+1000);
    req.session.pngNum = pngNum;
    var p = new captchapng(80,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha 
    p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 

    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
    next();
});

app.listen(port,function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  API listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});