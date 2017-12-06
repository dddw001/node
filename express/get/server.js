var express=require("express");
var app=express();

app.use(express.static('public'));

app.get('/index.html',function(req,res){
  res.sendFile(__dirname+"/"+"index.html");
})

app.get("/process_get",function(req,res){
  var response={
    "first-name":req.query.first_name,
    "last-name":req.query.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

var server=app.listen(8081,'localhost',function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log("访问地址为http://%s:%s",host,port);
})