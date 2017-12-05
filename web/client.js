var http=require("http");

var options={
  //protocol:'http:',
  //host:'127.0.0.1',
  host:'localhost',
  port:'8081',
  path:'/index.html'
};

var callback=function(response){
  var body='';
  response.on('data',function(data){
    body+=data;
  })
  response.on('end',function(){
    console.log(body);
  })
}

var req=http.request(options,callback);
req.on('error',function(e){
  console.log(",,,,"+e);
})
req.end();