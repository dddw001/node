var express=require("express");
var app=express();
var bodyParser=require('body-parser');

var urlencodeParser=bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

app.get('/index.html',function(req,res){
  res.sendFile(__dirname+"/"+"index.html");
})

app.post("/process_get",urlencodeParser,function(req,res){
  var response={
    "first-name":req.body.first_name,
    "last-name":req.body.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

var server=app.listen(8081,'localhost',function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log("访问地址为http://%s:%s",host,port);
})