var app = new (require('express'))();
var bodyParser = require("body-parser");
var port = 3060;
var session = require("express-session");

app.use(session({
  secret: 'sessiontest',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
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
          res.json(result);
    }else{
       const result = {
              status: false,
              code: '1',
              msg: 'succ',
              username: req.body.username,
              password: req.body.password,
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

app.listen(port,function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  API listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});