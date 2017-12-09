var express=require("express");
var app=express();
var fs=require("fs");

var newUser={
  "user4":{
    "name":"ddd",
    "password":"psw4",
    "profession":"teacher",
    "id":4
  }
}

app.get("/addUser",function(req,res){
  fs.readFile(__dirname+"/"+"users.json","utf8",function(err,data){
    data=JSON.parse(data);
    data["user4"]=newUser["user4"];
    console.log(data);
    //stringfy()函数第三个参数指定缩进
    res.end(JSON.stringify(data,null,2));
  });
})

var server=app.listen(8081,'localhost',function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log("访问地址为http://%s:%s",host,port);
})