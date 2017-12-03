var util=require("util");

util.isArray([]);
console.log(util.isArray([]));
util.isArray(new Array());

util.isArray({});

//util.isArray(object)
//如果给定的参数 "object" 是一个数组返回true，否则返回false。

//util.isRegExp(object)
//如果给定的参数 "object" 是一个正则表达式返回true，否则返回false

//util.isDate(object)
//如果给定的参数 "object" 是一个日期返回true，否则返回false

//util.isError(object)
//如果给定的参数 "object" 是一个错误对象返回true，否则返回false