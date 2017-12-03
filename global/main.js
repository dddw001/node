//文件所在位置的绝对路径
//console.log(__filename);

//当前执行脚本所在的目录
//console.log(__dirname);

//setTimeout(cb,ms)在ms毫秒后执行一次cb函数
//clearTimeout(t) 清除通过setTimeout设置的定时器
//setInterval(cb,ms) clearInterval(t)同理
// function hello(){
//   console.log("Hello");
// }
// setTimeout(hello,2000);

// 输出到终端
//process.stdout.write("Hello World!" + "\n");
// 通过参数读取
//process.argv.forEach(function(val, index, array) {
  // console.log(index + ': ' + val);
//});
// 获取执行路径
//console.log(process.execPath);
// 平台信息
//console.log(process.platform);

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());