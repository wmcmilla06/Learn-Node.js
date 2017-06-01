var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send(`This is the Server.js. This is a test site ran by Campus 9.
     The use of this site is allowed by the public. The server is still operational.
      If you intend to hack or destory this sever. Please do not do that.
      This website was created using Atom. `)
})

app.get('/:value', function(req,res){
  res.send(req.params.value);
})


app.listen(8080)
