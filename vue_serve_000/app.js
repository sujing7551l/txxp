//app.js 服务器端程序
// 1:下载三个模块 
//cors                    完成跨域处理
//express-session session 对象
//mysql                   数据库驱动
//express                 web服务器
//下载命令在线
//npm i cors express-session   express mysql
//2.将以上四个模块引入到当前程序
const express = require("express");
const mysql = require ("mysql");
const cors = require ("cors");
const session = require ("express-session");

//3.创建数据库连接池(池 提高效率)
var pool=mysql.createPool({
    host:"127.0.0.1",//数据库地址
    user:"root",     //数据库用户名
    password:"",     //数据库密码
    port:3306,       //数据库端口
    database:"app2",   //库名
    connectionLimit:15  //15连接
})
//4:配置跨域模块
//   允许哪个程序跨域访问服务器
//   脚手架:3001  允许3001访问我
//   服务器:4000  你
var server=express();
server.use(cors({
    origin:["http://127.0.0.1:8080", "http://localhost:8080"],
    credentials:true//每次请求需要验证
}))
//5:配置session模块
server.use(session({
    secret:"128位字符串",//安全字符串
    resave:true,//请求时更新数据
    saveUninitialized:true//保存初始值
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(4000);

//8:功能一:完成用户登录
//1.获取脚手架参数
server.get("/login",(req,res)=>{
var uname=req.query.uname;
var upwd=req.query.upwd;
//2.创建sql语句查询
var sql="SELECT id FROM app2_login WHERE uname=? AND upwd=md5(?)"
//3.执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
if (err) throw err;
//4.获取执行结果
//5.判断查询是否成功 result.length
if (result.length==0){
    res.send({code:-1,msg:"用户名或密码有误"})
}else{
// 5.1:保存用户id在session对象中
// result数据格式[{id:1}]
    req.session.uid=result[0].id;
    res.send({code:1,msg:"登录成功"})
}
//6.将结果返回脚手架
})
})
//#检测
//(1)查询数据库是否有xz_login
//   USE xz;
//   SELECT * FROM xz_login;
//(2)启动服务器
//   node app.js
//(3)打开浏览器在地址栏输入按回
//   http://127.0.0.1:4000/login?uname=tom&upwd=123
//   http://127.0.0.1:4000/login?uname=tom&upwd=122  
//app.js 复9~73 



// 功能2
server.get("/detail_pic",(req,res)=>{
    //2.创建sql语句查询N
    var sql="SELECT * FROM  app2_detail_pic"
    //3.执行sql语句
    pool.query(sql,(err,result)=>{
    if (err) throw err;
    console.log(result);
      res.send(result)
    })

})

// 功能3
server.get("/zhishi_pic",(req,res)=>{
    //2.创建sql语句查询N
    var sql="SELECT * FROM   app2_zhishi_pic"
    //3.执行sql语句
    pool.query(sql,(err,result)=>{
    if (err) throw err;
    console.log(result);
      res.send(result)
    })

})