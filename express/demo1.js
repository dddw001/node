var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 //port<65536
var server = app.listen(28081,'localhost', function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log(host);
  console.log(port);
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})