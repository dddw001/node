var mysql=require("mysql");

var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'cdxcdx',
  database:'test'
});
connection.connect();

//查询所有
// var sql1='SELECT * FROM websites';
// connection.query(sql1,function(error,result){
//   if(error){
//     console.log('[SELECT ERROR]-',error.message);
//     return;
//   }
//   console.log(result);
// })

//插入
// var sql='INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
// var addSqlParams=['菜鸟工具','https://c.runoob.com','23453','CN'];
// connection.query(sql,addSqlParams,function(error,result){
//   if(error){
//     console.log('[INSERT ERROR]-',error.message);
//     return;
//   }
//   console.log(result);
// })

//修改
// var sql='UPDATE websites SET name=?,url=? WHERE Id=?';
// var modSqlParams=['菜鸟移动站','https://m.runoob.com',6];
// connection.query(sql,modSqlParams,function(error,result){
//   if(error){
//     console.log('[UPDATE ERROR]-',error.message);
//     return;
//   }
//   console.log(result);
// })

var sql='DELETE FROM websites where id=6';
connection.query(sql,function(error,result){
  if(error){
    console.log('[DELETE ERROR]-',error.message);
    return;
  }
  console.log(result);
})
connection.end();