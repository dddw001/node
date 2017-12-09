var express=require("express");
var app=express();
var fs=require("fs");

var id=2;

app.get("/deleteUser",function(req,res){
  fs.readFile(__dirname+'/'+'users.json','utf8',function(err,data){
    data=JSON.parse(data);
    delete data["user"+id];
    console.log(data);
    res.end(JSON.stringify(data,null,2));
  });
})

var server=app.listen(8081,'localhost',function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log('访问地址为http://%s:%s',host,port);
})