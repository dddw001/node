var http=require("http");
var querystring=require("querystring");

var postHTML=
          '<html><head><title>post请求</title></head></html>'+
          '<body>'+
          '<form method="post">'+
          '网站名：<input name="name"><br/>'+
          '网站url：<input name="url"><br/>'+
          '<input type="submit"/>'+
          '<from/>'
          '</body></html>';

http.createServer(function(req,res){
  var body="";
  req.on('data',function(chunk){
    body+=chunk;
  });
  req.on('end',function(){
    body=querystring.parse(body);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    if(body.name&&body.url){
      res.write("网站名："+body.name);
      res.write("网站url："+body.url);
    }
    else
    {
      res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);