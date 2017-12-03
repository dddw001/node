//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法
var util=require("util");

function Person(){
  this.name="hi";
  this.toString=function(){
    return this.name;
  };
}
var obj=new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
console.log(util.inspect(obj,false,2,true));