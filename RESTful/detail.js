var express=require("express");
var app=express();
var fs=require("fs");

app.get("/:id",function(req,res){
  fs.readFile(__dirname+"/"+"users.json","utf8",function(err,data){
    data=JSON.parse(data);
    var user=data["user"+req.params.id];
    console.log(user);
    res.end(JSON.stringify(user,null,2));
  });
})

var server=app.listen(8081,'localhost',function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log("访问地址为http://%s:%s",host,port);
})